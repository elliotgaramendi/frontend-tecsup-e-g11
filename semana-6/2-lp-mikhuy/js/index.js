'use strict';

const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');
const listHeader = document.querySelector('.list--header');

iconMenu.addEventListener('click', () => {
  listHeader.style.pointerEvents = 'auto';
  listHeader.style.opacity = 1;
});

iconClose.addEventListener('click', () => {
  listHeader.style.pointerEvents = 'none';
  listHeader.style.opacity = 0;
});