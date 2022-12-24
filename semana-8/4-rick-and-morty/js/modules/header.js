import { renderCharacters } from "../utils/utils.js";

const header = () => {
  const searchForm = document.getElementById('searchForm');

  const searchCharacters = (e) => {
    e.preventDefault();
    const name = searchForm.name.value;
    fetchReadCharacters(name);
  };

  const fetchReadCharacters = async (name) => {
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
      renderCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  searchForm.addEventListener('submit', searchCharacters);
};

export default header;