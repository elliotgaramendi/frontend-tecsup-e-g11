const foods = () => {
  const foodsFoods = document.getElementById('foodsFoods');
  foodsFoods.innerHTML = `
    <div class="col-md-4">
      <div class="card bg-dark border border-2 border-light border-opacity-25 mx-auto"
        style="width: min(100%, 18rem);">
        <img src="https://wallpapercave.com/wp/Pzb3LkG.jpg" class="card-img-top" alt="Anime 1" width="256"
          height="144" style="width: 100%; height: 192px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  `;
};

export default foods;