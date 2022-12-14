'use strict';

const documentReady = () => {
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  
  const brokenHeart = () => {
    noButton.style.top = Math.random() * innerHeight + 'px';
    noButton.style.left = Math.random() * innerWidth + 'px';
  };

  noButton.addEventListener('mouseover', brokenHeart);
};

document.addEventListener('DOMContentLoaded', documentReady);