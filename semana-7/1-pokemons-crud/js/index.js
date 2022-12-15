'use strict';

const documentReady = () => {
  const tBodyPokemons = document.getElementById('tBodyPokemons');
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
    // console.log({ name, type, hp, attack, special, imgUrl });
    tBodyPokemons.innerHTML += `
    <tr>
      <td>1</td>
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
  };

  formPokemon.addEventListener('submit', createPokemon);
};

document.addEventListener('DOMContentLoaded', documentReady);