#!/usr/bin/env python3
"""Populate "Mentioned by" sections for DSA notes pages."""
from __future__ import annotations

import re
import sys
from collections import defaultdict
from pathlib import Path
from typing import Dict, List, Tuple
from urllib.parse import urljoin

REPO_ROOT = Path(__file__).resolve().parent.parent
DSA_ROOT = REPO_ROOT / "dsa-notes"

MENTION_START = "<!-- dsa-mentioned-by:start -->"
MENTION_END = "<!-- dsa-mentioned-by:end -->"
LINK_PATTERN = re.compile(r"\[([^\]]+)\]\(([^)]+)\)\{\:\s*\.dsa-mention[^}]*\}")


class FrontMatter:
    def __init__(self, permalink: str | None, title: str | None) -> None:
        self.permalink = permalink
        self.title = title


def normalize_permalink(permalink: str) -> str:
    permalink = permalink.strip()
    if not permalink:
        return ""
    permalink = permalink.split("?", 1)[0]
    permalink = permalink.split("#", 1)[0]
    if not permalink.startswith("/"):
        permalink = "/" + permalink
    permalink = re.sub(r"//+", "/", permalink)
    permalink = permalink.rstrip("/") + "/"
    return permalink


def parse_front_matter(text: str) -> Tuple[FrontMatter, str]:
    if not text.startswith("---\n"):
        return FrontMatter(None, None), text
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return FrontMatter(None, None), text
    end_idx = None
    for idx in range(1, len(lines)):
        if lines[idx].strip() == "---":
            end_idx = idx
            break
    if end_idx is None:
        return FrontMatter(None, None), text

    data: Dict[str, str] = {}
    for line in lines[1:end_idx]:
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        key = key.strip()
        value = value.strip()
        if value.startswith('"') and value.endswith('"') and len(value) >= 2:
            value = value[1:-1]
        elif value.startswith("'") and value.endswith("'") and len(value) >= 2:
            value = value[1:-1]
        data[key] = value

    permalink = normalize_permalink(data.get("permalink", "")) if "permalink" in data else None
    title = data.get("title")
    return FrontMatter(permalink, title), text


def extract_mentions(text: str, base_permalink: str) -> List[Tuple[str, str]]:
    if MENTION_START in text:
        search_text = text.split(MENTION_START, 1)[0]
    else:
        search_text = text
    mentions: List[Tuple[str, str]] = []
    for match in LINK_PATTERN.finditer(search_text):
        label, href = match.groups()
        href = href.strip()
        if not href:
            continue
        if any(href.startswith(prefix) for prefix in ("http://", "https://", "mailto:")):
            continue
        resolved = urljoin(base_permalink, href)
        resolved = normalize_permalink(resolved)
        if not resolved:
            continue
        mentions.append((label.strip(), resolved))
    return mentions


def replace_between_markers(text: str, start_marker: str, end_marker: str, lines: List[str]) -> Tuple[str, bool]:
    if start_marker not in text or end_marker not in text:
        return text, False
    before, rest = text.split(start_marker, 1)
    between, after = rest.split(end_marker, 1)
    block = "\n"
    if lines:
        block += "\n".join(lines) + "\n"
    new_text = before + start_marker + block + end_marker + after
    if new_text == text:
        return text, False
    return new_text, True


def main() -> int:
    if not DSA_ROOT.is_dir():
        print(f"No dsa-notes directory at {DSA_ROOT}", file=sys.stderr)
        return 1

    files = sorted(DSA_ROOT.rglob("*.md"))
    file_text: Dict[Path, str] = {}
    front_matters: Dict[Path, FrontMatter] = {}
    permalink_to_path: Dict[str, Path] = {}

    for path in files:
        text = path.read_text(encoding="utf-8")
        fm, _ = parse_front_matter(text)
        file_text[path] = text
        front_matters[path] = fm
        if fm.permalink:
            permalink_to_path[fm.permalink] = path

    incoming: Dict[Path, Dict[str, Dict[str, object]]] = defaultdict(lambda: defaultdict(lambda: {"title": None, "labels": set()}))

    for path in files:
        fm = front_matters[path]
        if not fm.permalink:
            continue
        mentions = extract_mentions(file_text[path], fm.permalink)
        for label, target_permalink in mentions:
            target_path = permalink_to_path.get(target_permalink)
            if target_path is None:
                continue
            if target_path == path:
                continue
            target_entry = incoming[target_path][fm.permalink]
            target_entry["title"] = fm.title or target_entry.get("title") or path.stem
            if label:
                target_entry["labels"].add(label)

    changed_any = False

    for path, text in file_text.items():
        fm = front_matters[path]
        if not (MENTION_START in text and MENTION_END in text):
            continue
        sources = incoming.get(path, {})
        mention_lines: List[str] = []
        if sources:
            sorted_sources = sorted(sources.items(), key=lambda item: (item[1]["title"] or "", item[0]))
            for permalink, data in sorted_sources:
                title = data["title"] or permalink
                link = f'[{title}]({permalink}){{: .dsa-mention }}'
                labels = sorted(data["labels"])
                if labels:
                    label_text = ", ".join(labels)
                    mention_lines.append(f"- {link} — {label_text}")
                else:
                    mention_lines.append(f"- {link}")
        new_text, mention_changed = replace_between_markers(text, MENTION_START, MENTION_END, mention_lines)
        if mention_changed:
            path.write_text(new_text, encoding="utf-8")
            changed_any = True

    return 0 if not changed_any else 0


if __name__ == "__main__":
    sys.exit(main())
