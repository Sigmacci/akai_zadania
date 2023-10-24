const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  let parent = document.createElement('div');
  parent.className = "container";
  pokemons.forEach(pokemon => {
    let card = document.createElement('div');
    card.className = "card";
    card.style = 'text-align: center;';

    let image = document.createElement('img');
    image.src = pokemon.image;
    card.appendChild(image);

    let name = document.createElement('p');
    name.innerText = pokemon.name;
    card.appendChild(name);

    parent.appendChild(card);
  });
  pokemonsContainer.appendChild(parent);
}

renderPokemons(pokemons);

function filterPokemons(pokemons) {
  const name = document.getElementById("pokemon-name").value.toLowerCase();
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let types = [];
  
  checkboxes.forEach(ch => {
    if (ch.checked)
      types.push(ch.id)
  });

  if (name !== '') {
    return pokemons.filter(p => p.types.every(t => types.includes(t)) && p.name.toLowerCase().includes(name));
  }

  return pokemons.filter(p => p.types.every(t => types.includes(t)));
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  pokemonsContainer.innerHTML = '';
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);
