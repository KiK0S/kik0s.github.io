document.addEventListener('DOMContentLoaded', () => {
  const triggers = Array.from(document.querySelectorAll('[data-inline-note]'));
  if (!triggers.length) return;

  const closeTooltip = (trigger) => {
    const button = trigger.querySelector('.inline-note__trigger') || trigger;
    trigger.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  };

  const closeAll = (except = null) => {
    triggers.forEach((trigger) => {
      if (trigger !== except) closeTooltip(trigger);
    });
  };

  const positionTooltip = (trigger) => {
    const bubble = trigger.querySelector('.inline-note__bubble');
    if (!bubble) return;

    trigger.style.setProperty('--tooltip-offset-x', '0px');
    trigger.removeAttribute('data-tooltip-placement');

    const margin = 12;
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight;
    const triggerRect = trigger.getBoundingClientRect();
    const bubbleRect = bubble.getBoundingClientRect();

    let offset = 0;

    if (bubbleRect.left < margin) {
      offset = margin - bubbleRect.left;
    } else if (bubbleRect.right > viewportWidth - margin) {
      offset = viewportWidth - margin - bubbleRect.right;
    }

    trigger.style.setProperty('--tooltip-offset-x', `${offset}px`);

    const shiftedRect = bubble.getBoundingClientRect();
    const hasRoomBelow = triggerRect.bottom + shiftedRect.height + margin < viewportHeight;

    if (shiftedRect.top < margin && hasRoomBelow) {
      trigger.setAttribute('data-tooltip-placement', 'below');
    }
  };

  const openTooltip = (trigger) => {
    const button = trigger.querySelector('.inline-note__trigger') || trigger;
    closeAll(trigger);
    trigger.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
    positionTooltip(trigger);
  };

  triggers.forEach((trigger, index) => {
    const button = trigger.querySelector('.inline-note__trigger') || trigger;
    let bubble = trigger.querySelector('.inline-note__bubble');

    if (!bubble && (trigger.dataset.tooltip || trigger.dataset.tooltipImage || trigger.dataset.tooltipVideo)) {
      bubble = document.createElement('span');
      bubble.className = 'inline-note__bubble';
      bubble.id = trigger.id ? `${trigger.id}-tooltip` : `inline-note-${index + 1}`;
      bubble.setAttribute('role', 'tooltip');

      if (trigger.dataset.tooltipImage) {
        const image = document.createElement('img');
        image.className = 'inline-note__media';
        image.src = trigger.dataset.tooltipImage;
        image.alt = trigger.dataset.tooltipImageAlt || '';
        image.loading = 'lazy';
        bubble.appendChild(image);
      }

      if (trigger.dataset.tooltipVideo) {
        const video = document.createElement('video');
        video.className = 'inline-note__media';
        video.src = trigger.dataset.tooltipVideo;
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.setAttribute('aria-label', trigger.dataset.tooltipImageAlt || '');
        bubble.appendChild(video);
      }

      if (trigger.dataset.tooltip) {
        const text = document.createElement('span');
        text.className = 'inline-note__text';
        text.textContent = trigger.dataset.tooltip;
        bubble.appendChild(text);
      }

      trigger.appendChild(bubble);
    }

    if (bubble) {
      button.setAttribute('aria-describedby', bubble.id);
      button.removeAttribute('aria-label');
    }

    button.setAttribute('aria-expanded', 'false');

    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (trigger.classList.contains('is-open')) {
        closeTooltip(trigger);
      } else {
        openTooltip(trigger);
      }
    });

    trigger.addEventListener('mouseenter', () => positionTooltip(trigger));
    trigger.addEventListener('focusin', () => positionTooltip(trigger));

    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeTooltip(trigger);
        button.blur();
      }
    });
  });

  document.addEventListener('click', () => closeAll());
  window.addEventListener('resize', () => closeAll());
  window.addEventListener('scroll', () => closeAll(), { passive: true });
});
