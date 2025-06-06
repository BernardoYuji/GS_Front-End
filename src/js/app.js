document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }

  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    iniciarSlideshow(slides);
  }
});

function mudarCor(cor) {
  document.body.style.backgroundColor = cor;
}

function iniciarSlideshow(slides) {
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 3000);
}
