const characters = () => {
  const renderCharacters = (data) => {
    const charactersContainer = document.getElementById('charactersContainer');

    data.forEach((element) => {
      const { id, name, status, species, type, gender, origin, location, image } = element;

      charactersContainer.innerHTML += `
        <div class="col-md-4" key=${id}>
          <div class="card bg-dark border border-2 border-light border-opacity-25 h-100 mx-auto"
            style="width: min(100%, 18rem);">
            <div class="card-header text-center">
              ${name}
            </div>
            <div class="card-body">
              <img src="${image}" class="card-img-top" alt="Anime 1" width="256" height="144"
                style="width: 100%; height: 192px; object-fit: cover; border-radius: 0.5rem"/>
              <h5 class="card-title mt-2">${name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${type || 'Chanchito'}</h6>
              <p class="card-text">${status}</p>
              <a href="#" class="card-link">Card link</a>
            </div>
            <div class="card-footer text-center">
              <a href="${species}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Receta</a>
            </div>
          </div>
        </div>
      `;
    });
  };

  const fetchRead = async () => {
    try {
      const { data } = await axios.get('https://rickandmortyapi.com/api/character?page=1');
      renderCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('fetchRead');
    }
  };
  fetchRead();
};

export default characters;