import { fetchReadCharacters, renderCharacters } from "../utils/utils.js";

const header = () => {
  const searchForm = document.getElementById('searchForm');

  const searchCharacters = async (e) => {
    e.preventDefault();
    const name = searchForm.name.value;
    const data = await fetchReadCharacters(1, name);
    renderCharacters(data);
  };

  searchForm.addEventListener('submit', searchCharacters);
};

export default header;