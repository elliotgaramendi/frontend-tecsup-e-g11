const comidas = [
  {
    "id": 1,
    "name": "Ají de Gallina",
    "description": "El ají de gallina es un plato típico de la gastronomía peruana, concretamente de la costa, ​ que consiste en un ají o crema espesa con pechuga de gallina deshilachada. Esta crema es servida con papas cocidas, y en ocasiones con arroz blanco. Es común reemplazar la gallina por pollo.",
    "urlImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ají_de_gallina.jpg/800px-Ají_de_gallina.jpg",
    "urlRecipe": "https://www.recetasnestle.com.pe/recetas/aji-de-gallina-2"
  }
];

const foods = () => {
  const foodsFoods = document.getElementById('foodsFoods');
  const [comida] = comidas;
  foodsFoods.innerHTML = `
    <div class="col-md-4" key=${comida.id}>
      <div class="card bg-dark border border-2 border-light border-opacity-25 mx-auto"
        style="width: min(100%, 18rem);">
        <img src="${comida.urlImage}" class="card-img-top" alt="Anime 1" width="256"
          height="144" style="width: 100%; height: 192px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${comida.name}</h5>
          <p class="card-text">${comida.description}</p>
          <a href="${comida.urlRecipe}" class="btn btn-primary">Receta</a>
        </div>
      </div>
    </div>
  `;
};

export default foods;