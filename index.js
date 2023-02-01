const superHero = document.getElementById('superhero');
const searchBtn = document.getElementById("search-btn");
const superHeroList = document.getElementById("superhero-list");

const renderSuperHero = (superHeros) => {
    superHeros.forEach((hero) => {
        const div = document.createElement('div');
        div.id= hero.id;
        div.onclick = (e) => {
          handleOnSuperHeroClick(e);
        };
        div.classList.add('flex');
        const h5 = document.createElement('h5');
        const img = document.createElement('img');
        img.src = hero.image.url;
        img.height = 150;
        img.width = 150;

        h5.textContent = hero.name;

        div.appendChild(h5);
        div.appendChild(img);
        superHeroList.appendChild(div);
    });
}

handleOnSuperHeroClick = (e) => {
    const id = e.target.id; 
    console.log('id', id);
  localStorage.setItem("superHero", id);
  window.open("details.html");
};
const fetchSuperHero = async () => {
    const name = superHero.value;
    const res = await fetch(`https://www.superheroapi.com/api.php/1628132770683309/search/${name}`);
    const data  = await res.json();
    renderSuperHero(data.results);
    superHero.value = '';
}

searchBtn.addEventListener('click', fetchSuperHero);