/*
Get a random pokemon using
the pokemon api
  https://pokeapi.co/docs/v2.html/
*/

const checkForSpaceKey = (e) => {
  if (e.code === 'Space') {
    getRandomPokemon();
  }
};

const getRandomPokemon = () => {
  let random = Math.floor(Math.random() * 800);
  fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`)
    .then((response) => response.json())
    .then((myJson) => {
      let nameElement = document.querySelector('.name');
      nameElement.innerText = myJson.name;

      let imageUrl = myJson.sprites.front_default;
      document.querySelector('img').src = imageUrl;
    })
    .catch((err) => console.log(err));
};

window.addEventListener('load', getRandomPokemon());

const button = document.querySelector('button');
button.addEventListener('click', getRandomPokemon);

window.document.addEventListener('keydown', checkForSpaceKey);
