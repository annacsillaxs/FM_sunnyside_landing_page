const toggle = document.querySelector('#toggle');
const modal = document.querySelector('.nav__modal');

toggle.addEventListener('click', () => {
  modal.classList.toggle('open');
  console.log('open')
})