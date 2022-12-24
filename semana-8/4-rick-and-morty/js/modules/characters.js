import { fetchReadCharacters, renderCharacters } from "../utils/utils.js";

const characters = async () => {
  const previousCharacters = document.getElementById('previousCharacters');
  const nextCharacters = document.getElementById('nextCharacters');
  let page = 1;

  previousCharacters.addEventListener('click', async () => {
    const data = await fetchReadCharacters(--page);
    renderCharacters(data);
  });

  nextCharacters.addEventListener('click', async () => {
    const data = await fetchReadCharacters(++page);
    renderCharacters(data);
  });

  const data = await fetchReadCharacters(page);
  renderCharacters(data);
};

export default characters;