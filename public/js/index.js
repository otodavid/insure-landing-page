const menuBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.open');
const closeIcon = document.querySelector('.close');

menuBtn.addEventListener('click', () => {
  const body = document.querySelector('body');

  if (nav.dataset.menuStatus === 'closed') {
    nav.classList.add('-translate-y-0');
    nav.classList.remove('-translate-y-[100vh]');
    nav.dataset.menuStatus = 'open';

    hamburgerIcon.className = 'open hidden';
    closeIcon.className = 'close block';

    body.classList.add('max-h-screen', 'h-screen', 'overflow-hidden');
  } else {
    nav.classList.remove('-translate-y-0');
    nav.classList.add('-translate-y-[100vh]');
    nav.dataset.menuStatus = 'closed';

    closeIcon.className = 'close hidden';
    hamburgerIcon.className = 'open block';

    body.classList.remove('max-h-screen', 'h-screen', 'overflow-hidden');
  }
});

console.log(menuBtn);
