document.addEventListener("DOMContentLoaded", function() {
  // Get the switch element
  const switchElement = document.getElementById('language-switch');
  var contentEn = document.querySelector('.content-en');
  var contentRu = document.querySelector('.content-ru');

  // Add click event listener to the switch
  switchElement.addEventListener('click', function() {
    console.log('click');
    // Toggle the 'active' class on click
    if (this.classList.toggle('active')) {
      contentEn.classList.remove('active');
      contentRu.classList.add('active');
    } else {
      contentRu.classList.remove('active');
      contentEn.classList.add('active');
    }
    this.classList.toggle('inactive');
  });
});
