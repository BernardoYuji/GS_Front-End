document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
});


function mudarCor(cor) {
  document.body.style.backgroundColor = cor;
}
