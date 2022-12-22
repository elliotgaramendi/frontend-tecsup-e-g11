const comidas = [
  {
    "id": 1,
    "name": "Ají de Gallina",
    "description": "El ají de gallina es un plato típico de la gastronomía peruana, concretamente de la costa, que consiste en un ají o crema espesa con pechuga de gallina deshilachada. Esta crema es servida con papas cocidas, y en ocasiones con arroz blanco. Es común reemplazar la gallina por pollo.",
    "urlImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ají_de_gallina.jpg/800px-Ají_de_gallina.jpg",
    "urlRecipe": "https://www.recetasnestle.com.pe/recetas/aji-de-gallina-2"
  },
  {
    "id": 2,
    "name": "Lomo Saltado",
    "description": "El lomo saltado es un plato típico de la gastronomía del Perú consistente en carne de res, arroz cocido y papas fritas. Es uno de los platos más consumidos popularmente en el Perú.",
    "urlImage": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Lomo-saltado-perudelights.jpg",
    "urlRecipe": "https://buenazo.pe/recetas/platos-de-fondo/lomo-saltado-ingredientes-preparacion-61"
  },
  {
    "id": 3,
    "name": "Secon de res con Frejoles",
    "description": "El Seco de res es un guiso típicamente peruano conocido desde la época colonial cuando en ese entonces tenía el nombre de «Seco Tajime» y era preparado con carne de carnero. En este post de la sabrosa cocina peruana conocerás más pasajes históricos de este plato emblemático.",
    "urlImage": "https://i.ytimg.com/vi/rMsbGQ2xw-M/maxresdefault.jpg",
    "urlRecipe": "https://buenazo.pe/recetas/platos-de-fondo/frejoles-seco-receta-paso-paso-146"
  },
  {
    "id": 4,
    "name": "Bisteck a lo Pobre",
    "description": "Bistec a lo pobre o bife a lo pobre es un plato de las gastronomías peruana y chilena. Los elementos comunes en ambos países son la carne de vacuno a la plancha, huevos y papas fritas. Existen muchos platos similares y con distintos nombres en otros lugares del mundo.",
    "urlImage": "https://iperu.pe/wp-content/uploads/2019/08/bistec-a-lo-pobre_800x534.jpg",
    "urlRecipe": "https://comidasperuanas.net/bistec-a-lo-pobre/"
  }
];

const foods = () => {
  const foodsFoods = document.getElementById('foodsFoods');
  comidas.forEach((element) => {
    const { id, name, description, urlImage, urlRecipe } = element;

    foodsFoods.innerHTML += `
      <div class="col-md-4" key=${id}>
        <div class="card bg-dark border border-2 border-light border-opacity-25 mx-auto"
          style="width: min(100%, 18rem);">
          <img src="${urlImage}" class="card-img-top" alt="Anime 1" width="256"
            height="144" style="width: 100%; height: 192px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <a href="${urlRecipe}" class="btn btn-primary">Receta</a>
          </div>
        </div>
      </div>
    `;
  });
};

export default foods;