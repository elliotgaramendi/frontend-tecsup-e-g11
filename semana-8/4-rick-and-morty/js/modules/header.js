const header = () => {
  const searchForm = document.getElementById('searchForm');

  const fetchReadCharacters = (e) => {
    e.preventDefault();
    alert('Read characters');
  };

  searchForm.addEventListener('submit', fetchReadCharacters);
};

export default header;