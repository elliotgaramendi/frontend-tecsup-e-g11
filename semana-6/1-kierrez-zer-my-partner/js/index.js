'use strict';

const documentReady = () => {
  const heroTitle = document.getElementById('heroTitle');
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  const getPartner = () => {
    alert('π NoW ZoMoS PartNer π');
    alert('β₯ U Me DaZ LuZ & EsPerrAnZa A My Laif β₯');
    alert('π± OuR VoDa Is MaΓaNa π±');
    location.href = 'https://youtu.be/mos84UqOU3M?t=53';
  };

  const brokenHeart = () => {
    noButton.style.top = Math.random() * innerHeight + 'px';
    noButton.style.left = Math.random() * innerWidth + 'px';
  };

  const partner = prompt('π₯° DyMe Yur NoMbrE π₯°');
  heroTitle.innerText += ` ${partner || 'Anonimo'}? β₯`;

  yesButton.addEventListener('click', getPartner);
  noButton.addEventListener('mouseover', brokenHeart);
};

document.addEventListener('DOMContentLoaded', documentReady);