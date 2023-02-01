const details = document.getElementById("detailsContainer");

const fetchSuperHero = async () => {
  const id = localStorage.getItem('superHero');
  const res = await fetch(
    `https://www.superheroapi.com/api.php/1628132770683309/${id}`
  );
  const data = await res.json();
  renderSuperHeroDetails(data);
};

const renderSuperHeroDetails = (superHero) => {
    console.log("data", superHero);
  details.innerHTML = `
        <div class='details'>
            <h3> ${superHero.name}</h3>
            <img height='150px' width='150px' src=${superHero.image.url} />
            <button> Add fav </>
        </div>
    `;
};

window.addEventListener("DOMContentLoaded", fetchSuperHero);