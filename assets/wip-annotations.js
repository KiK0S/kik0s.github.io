(function () {
  'use strict';

  var root = document.querySelector('[data-wip-annotations]');
  if (!root || !window.localStorage) {
    return;
  }

  var entry = root.querySelector('.entry');
  if (!entry) {
    return;
  }

  var storageKey = 'wip-annotations:' + window.location.pathname;
  var selector = 'p, li, blockquote, h2, h3, h4, h5, h6';
  var annotatedNodes = Array.prototype.slice.call(entry.querySelectorAll(selector)).filter(function (node) {
    return node.textContent.trim().length > 0 && !node.closest('.annotation-ignore');
  });

  function readStore() {
    try {
      return JSON.parse(window.localStorage.getItem(storageKey)) || {};
    } catch (error) {
      return {};
    }
  }

  function writeStore(store) {
    window.localStorage.setItem(storageKey, JSON.stringify(store));
  }

  function quoteFor(node) {
    return node.textContent.replace(/\s+/g, ' ').trim();
  }

  function updateNodeState(node, comment) {
    if (comment) {
      node.classList.add('wip-annotation-line--commented');
      node.setAttribute('title', 'Annotation: ' + comment);
    } else {
      node.classList.remove('wip-annotation-line--commented');
      node.removeAttribute('title');
    }
  }

  function annotateLine(node) {
    var line = node.getAttribute('data-annotation-line');
    var store = readStore();
    var existing = store[line] && store[line].comment ? store[line].comment : '';
    var comment = window.prompt('Comment for line ' + line + ':', existing);

    if (comment === null) {
      return;
    }

    comment = comment.trim();
    if (comment) {
      store[line] = {
        line: Number(line),
        quote: quoteFor(node),
        comment: comment,
        updatedAt: new Date().toISOString()
      };
    } else {
      delete store[line];
    }

    writeStore(store);
    updateNodeState(node, comment);
  }

  function sortedAnnotations() {
    var store = readStore();
    return Object.keys(store).map(function (line) {
      return store[line];
    }).sort(function (a, b) {
      return a.line - b.line;
    });
  }

  function formatMarkdown(items) {
    return items.map(function (item) {
      return '- Line ' + item.line + '\n  > ' + item.quote + '\n\n  ' + item.comment;
    }).join('\n\n');
  }

  function formatTsv(items) {
    var escapeCell = function (value) {
      return String(value).replace(/\t/g, ' ').replace(/\r?\n/g, ' ');
    };
    return ['line\tquote\tcomment'].concat(items.map(function (item) {
      return [item.line, item.quote, item.comment].map(escapeCell).join('\t');
    })).join('\n');
  }

  function exportAnnotations(format) {
    var items = sortedAnnotations();
    var outputFormat = format || 'markdown';
    var output;

    if (outputFormat === 'json') {
      output = JSON.stringify(items, null, 2);
    } else if (outputFormat === 'tsv') {
      output = formatTsv(items);
    } else {
      output = formatMarkdown(items);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(output).catch(function () {});
    }

    return output;
  }

  window.exportWipAnnotations = exportAnnotations;
  window.clearWipAnnotations = function () {
    window.localStorage.removeItem(storageKey);
    annotatedNodes.forEach(function (node) {
      updateNodeState(node, '');
    });
  };

  var store = readStore();
  annotatedNodes.forEach(function (node, index) {
    var line = String(index + 1);
    node.classList.add('wip-annotation-line');
    node.setAttribute('data-annotation-line', line);
    updateNodeState(node, store[line] && store[line].comment);
    node.addEventListener('click', function (event) {
      if (event.target.closest('a, button, input, textarea, select, label')) {
        return;
      }
      annotateLine(node);
    });
  });
}());
