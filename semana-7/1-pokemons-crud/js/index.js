'use strict';

const documentReady = () => {
  const pokemons = [];
  const formPokemon = document.getElementById('formPokemon');

  const createPokemon = (e) => {
    e.preventDefault();
    const documentFormPokemon = document.forms['formPokemon'];
    const name = documentFormPokemon.name.value;
    const type = documentFormPokemon.type.value;
    const hp = documentFormPokemon.hp.value;
    const attack = documentFormPokemon.attack.value;
    const special = documentFormPokemon.special.value;
    const imgUrl = documentFormPokemon.imgUrl.value;
    pokemons.push({ name, type, hp, attack, special, imgUrl });
    readPokemons();
  };

  const readPokemons = () => {
    const tBodyPokemons = document.getElementById('tBodyPokemons');
    tBodyPokemons.innerHTML = '';
    pokemons.forEach((element, index) => {
      const { name, type, hp, attack, special, imgUrl } = element;
      tBodyPokemons.innerHTML += `
        <tr>
          <td>${index}</td>
          <td>${name}</td>
          <td>${type}</td>
          <td>${hp}</td>
          <td>${attack}</td>
          <td>${special}</td>
          <td>
            <img
              src="${imgUrl}"
              alt="${name}" class="img-fluid" style="max-width: 128px;" />
          </td>
        </tr>
      `;
    });
  };

  formPokemon.addEventListener('submit', createPokemon);
};

document.addEventListener('DOMContentLoaded', documentReady);