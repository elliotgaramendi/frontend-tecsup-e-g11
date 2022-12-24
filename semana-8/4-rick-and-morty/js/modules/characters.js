import { renderCharacters } from "../utils/utils.js";

const characters = () => {
  const previousCharacters = document.getElementById('previousCharacters');
  const nextCharacters = document.getElementById('nextCharacters');
  let page = 1;

  const fetchReadCharacters = async (page) => {
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
      renderCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      window.scrollTo(0, 0);
    }
  };

  previousCharacters.addEventListener('click', () => {
    fetchReadCharacters(--page);
  });

  nextCharacters.addEventListener('click', () => {
    fetchReadCharacters(++page);
  });

  fetchReadCharacters(page);
};

export default characters;