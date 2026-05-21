document.addEventListener("DOMContentLoaded", function() {
  // Get the switch element
  const switchElement = document.getElementById('language-switch');
  const contentEn = document.querySelector('.content-en');
  const contentRu = document.querySelector('.content-ru');

  // If the page has no language switch (most pages), bail early so other scripts keep working
  if (!switchElement || !contentEn || !contentRu) {
    return;
  }

  // Add click event listener to the switch
  switchElement.addEventListener('click', function() {
    // Toggle the 'active' class on click
    if (this.classList.toggle('active')) {
      contentEn.classList.remove('active');
      contentRu.classList.add('active');
    } else {
      contentRu.classList.remove('active');
      contentEn.classList.add('active');
    }
    this.classList.toggle('inactive');

    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  });
});
