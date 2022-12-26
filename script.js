let pokemons = [];
let pokeball = document.querySelector(".pokeball");
let title = document.querySelector(".title");
let arrow = document.querySelector(".arrow");
let articuno = document.querySelector(".articuno");
let moltres = document.querySelector(".moltres");
let zapdos = document.querySelector(".zapdos");
let phaseOne = document.querySelector(".phase-one");
let phaseTwo = document.querySelector(".phase-two");
let title2 = document.querySelector(".div-title2");
let divBtnCreate = document.querySelector(".div-create");
let btnCreateTeam = document.querySelector(".create");
let titleCreate = document.querySelector(".create-team");
let divPokemons = document.querySelector(".div-pokemons");

//FUNCIONES///////////////////////////////////////////////////////////////////////////////

let showPokemon = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random() * 500)}`)
    .then((response) => response.json())
    .then((data) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      let p = document.createElement("p");
      let btn = document.createElement("button");

      div.classList.add("poke-div");
      div.classList.add("fade-in");
      img.setAttribute("src", data.sprites.other.dream_world.front_default);
      img.classList.add("poke-img");
      p.textContent = data.name;
      p.classList.add("poke-p");
      btn.classList.add("poke-btn");
      btn.textContent = "Choose";

      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(btn);
      divPokemons.appendChild(div);
    });
};

let showTeam = (pokemons, div) => {
  div.innerHTML = "";
  console.log(pokemons);
  pokemons.forEach((pokemon) => {
    let pokeDiv = document.createElement("div");
    let img = document.createElement("img");
    let url = pokemon.querySelector(".poke-img").getAttribute("src");
    img.setAttribute("src", url);
    img.classList.add("poke-img2");
    img.classList.add("flicker-in-1");
    pokeDiv.appendChild(img);
    div.appendChild(pokeDiv);
  });
  let img2 = document.createElement("img");
  let btn = document.createElement("button");
  let divImg2 = document.createElement("div");

  btn.textContent = "Try again";
  btn.classList.add("try-again");

  img2.setAttribute("src", "./team.png");
  img2.classList.add("img2");

  divImg2.classList.add("div-img2");
  divImg2.appendChild(img2);
  divImg2.appendChild(btn);
  phaseTwo.appendChild(divImg2);
};

// EJECUCION DEL SCRIPT///////////////////////////////////////////////////////////////////////////

pokeball.addEventListener("click", (e) => {
  pokeball.classList.add("scale-out-center");
  title.classList.add("slide-out-top");
  arrow.classList.add("fade-out");
  articuno.classList.add("slide-out-left");
  moltres.classList.add("slide-out-right");
  zapdos.classList.add("slide-out-bottom");
  setTimeout(() => {
    phaseOne.classList.add("display");
    phaseTwo.classList.remove("display");
    phaseTwo.classList.add("fade-in");
    title2.classList.add("fade-in2");
  }, 1500);
});

btnCreateTeam.addEventListener("click", (e) => {
  btnCreateTeam.classList.add("fade-out");
  titleCreate.classList.add("fade-out");
  setTimeout(() => {
    divBtnCreate.classList.add("display");
  }, 800);

  setTimeout(() => {
    divPokemons.style.flexDirection = "row";
    divPokemons.style.justifyContent = "center";
    showPokemon();
    showPokemon();
    showPokemon();
    showPokemon();
    showPokemon();
    showPokemon();
  }, 1000);
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".poke-btn")) {
    pokemons.push(e.target.parentElement);
    if (pokemons.length < 6) {
      divPokemons.innerHTML = "";
      showPokemon();
      showPokemon();
      showPokemon();
      showPokemon();
      showPokemon();
      showPokemon();
    }

    if (pokemons.length === 6) {
      showTeam(pokemons, divPokemons);
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".try-again")) {
    let divImg2 = document.querySelector(".div-img2");
    phaseTwo.removeChild(divImg2);
    pokemons = [];
    if (pokemons.length < 6) {
      divPokemons.innerHTML = "";
      showPokemon();
      showPokemon();
      showPokemon();
      showPokemon();
      showPokemon();
      showPokemon();
    }

    if (pokemons.length === 6) {
      showTeam(pokemons, divPokemons);
    }
  }
});
