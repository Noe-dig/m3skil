const tijdVak = document.getElementById("js--tijdVak");

setInterval(function(){
    var d = new Date();

    var uur = d.getHours();
    var minuten = d.getMinutes();

    if(minuten < 10){
      const tijd = uur+":0"+minuten;
      tijdVak.innerText = tijd;
    }
    else{
      const tijd = uur+":"+minuten;
      tijdVak.innerText = tijd;
    }
  }, 1000);

const pokemonImage = document.getElementById("js--pokemonImage");
 
const chart3 = document.getElementById('js--chart3');

const labels = ['PS4pro', 'Nintendo WiiU', 'Nintendo DS', 'PS1', 'PSP','Nintendo Switch'];
const evaLabels = ['Eva-00','Eva-01','Eva-02'];

const data = {
  labels: labels,
  datasets: [{
    label: "% gespeeld",
    backgroundColor: ['#d6d6d6','#e5e5e5'],
    data: [45, 25, 15, 5, 7, 3],
    borderWidth: 5
  }]
};
const data2 = {
  labels: evaLabels,
  datasets: [{
    label: "eva main colors",
    backgroundColor: ['#2986cc','#734f9a','#ed2323'],
    data: [1, 1, 1],
    borderWidth: 2
  }]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {}
};
const config2 = {
  type: 'pie',
  data: data2,
  options: {}
};

const chart1 = new Chart(
  document.getElementById('js--chart1'),
  config
);
const chart2 = new Chart(
  document.getElementById('js--chart3'),
  config2
);

function getPokemon()
{
  let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0, 
      ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, 
      psychic = 0, ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;
    
  const labels = ['normal','fighting','flying','poison','ground','rock','bug',
                  'ghost','steel','fire','water','grass','electric','psychic',
                  'ice','dragon','dark','fairy','unknown','shadow'];

  for(i = 0; i < 100; i++){
      let randomNumber = Math.floor(Math.random()*1025 + 1);

      let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/"+randomNumber)
                  .then(function(response){
                      return response.json();
                  })
                  .then(function(realData){
                    console.log(realData.name);
                    console.log(realData.types[0].type.name);
                    if(realData.types[1]){
                      console.log("2e type:");
                      console.log(realData.types[1].type.name);
                    }
                    console.log('-------------------------');
                    switch(realData.types[0].type.name){
                        case 'normal':
                          normal = normal + 1;
                          break;
                        case 'fighting':
                          fighting = fighting + 1;
                          break;
                        case 'flying':
                          flying = flying + 1;
                          break;
                        case 'poison':
                          poison = poison + 1;
                          break;
                        case 'ground':
                          ground = ground + 1;
                          break;
                        case 'rock':
                          rock = rock + 1;
                          break;
                        case 'bug':
                          bug = bug + 1;
                          break;
                        case 'ghost':
                          ghost = ghost + 1;
                          break;
                        case 'steel':
                          steel = steel + 1;
                          break;
                        case 'fire':
                          fire = fire + 1;
                          break;
                        case 'water':
                          water = water +1;
                          break;
                        case 'grass':
                          grass = grass + 1;                          
                          break;
                        case 'electric':
                          electric = electric + 1;
                          break;
                        case 'psychic':
                          psychic = psychic + 1;
                          break;
                        case 'ice':
                          ice = ice + 1;
                          break;
                        case 'dragon':
                          dragon = dragon + 1;
                          break;
                        case 'dark':
                          dark = dark + 1;
                          break;
                        case 'fairy':
                          fairy = fairy + 1;
                          break;
                        case 'unknown':
                          unknown = unknown + 1;
                          break;
                        case 'shadow':
                          shadow = shadow + 1;
                          break;
                      }
                    }).then(function(){
                      dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock, bug,
                        ghost, steel, fire, water, grass, electric, psychic,
                        ice, dragon, dark, fairy, unknown, shadow];
                      graph.update();
                    });
    } 
    const dataPokemon = {
      labels: labels,
      datasets: [
        {
          label: "Pokemon types",
          data: [normal, fighting, flying, poison, ground, rock, bug,
            ghost, steel, fire, water, grass, electric, psychic,
            ice, dragon, dark, fairy, unknown, shadow],
            backgroundColor: ['#d6d6d6','#e5e5e5'],
        }
      ]
    }
    const configPokemon = {
      type: "bar",
      data: dataPokemon, 
    }

    const graph = new Chart(document.getElementById("js--chart2"), configPokemon);
}

getPokemon();

// //random pokemon
let randomNumber = Math.floor(Math.random()*1025 + 1);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/"+randomNumber)
                .then(function(response){
                    return response.json();
                })
                .then(function(realData){
                     pokemonImage.src = realData.sprites.front_default;
                });

const catchButton = document.getElementById("js--catchButton");
const pokemonText = document.getElementById("js--pokemonText");

let pokemonGamePlayed = false;

catchButton.onclick = function(){    
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random()*2);
        if(catchNumber === 1){
            pokemonText.innerText = "The Pokemon was caught!";
        }
        else{
            pokemonText.innerText = "The Pokemon escaped!";
        }
        pokemonGamePlayed = true;
    }
    else if(pokemonGamePlayed === true){
        pokemonGamePlayed = true;
    }
    else{
        pokemonText.innerText = "Game over";
    }
}
