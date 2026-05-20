document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('[data-carousel]');

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
    if (!slides.length) return;

    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const dotsContainer = carousel.querySelector('[data-carousel-dots]');
    const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('button[data-index]')) : [];

    let current = slides.findIndex((slide) => slide.classList.contains('is-active'));
    current = current === -1 ? 0 : current;

    const setSlide = (index) => {
      const total = slides.length;
      current = ((index % total) + total) % total;

      slides.forEach((slide, idx) => {
        const isActive = idx === current;
        slide.classList.toggle('is-active', isActive);

        if (!isActive) {
          slide.querySelectorAll('video').forEach((video) => video.pause());
        }
      });

      dots.forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === current);
      });
    };

    if (prev) {
      prev.addEventListener('click', () => setSlide(current - 1));
    }

    if (next) {
      next.addEventListener('click', () => setSlide(current + 1));
    }

    if (dotsContainer) {
      dotsContainer.addEventListener('click', (event) => {
        const target = event.target.closest('button[data-index]');
        if (!target) return;
        const index = Number(target.dataset.index);
        if (!Number.isNaN(index)) {
          setSlide(index);
        }
      });
    }

    setSlide(current);
  });
});
