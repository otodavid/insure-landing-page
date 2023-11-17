const menuBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.open');
const closeIcon = document.querySelector('.close');
const anchorTags = [...document.querySelectorAll('a')];
const body = document.querySelector('body');
const workBtn = document.querySelector("a[href='#work']")

const openNav = () => {
  nav.classList.add('-translate-y-0');
  nav.classList.remove('-translate-y-[100vh]');
  nav.dataset.menuStatus = 'open';

  hamburgerIcon.className = 'open hidden';
  closeIcon.className = 'close block';

  body.classList.add('max-h-screen', 'h-screen', 'overflow-hidden');
};

const closeNav = () => {
  nav.classList.remove('-translate-y-0');
  nav.classList.add('-translate-y-[100vh]');
  nav.dataset.menuStatus = 'closed';

  closeIcon.className = 'close hidden';
  hamburgerIcon.className = 'open block';

  body.classList.remove('max-h-screen', 'h-screen', 'overflow-hidden');
}

menuBtn.addEventListener('click', () => {
  if (nav.dataset.menuStatus === 'closed') {
    openNav()
  } else {
    closeNav()
  }
});

anchorTags.forEach((tag) => {
  if(tag.classList.contains('dead-link')) {
    tag.setAttribute('href', 'javascript:void(0);');
  }

  tag.addEventListener('click', () => {
    const windowSize = window.innerWidth;

    if (windowSize < '765') {
      closeNav()
    }
  });
});
