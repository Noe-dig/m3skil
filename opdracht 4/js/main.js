const pokemonImage = document.getElementById("js--pokemonImage");
 
const chart1 = document.getElementById('js--chart1');
const chart2 = document.getElementById('js--chart2');

new Chart(chart1, {
  type: 'doughnut',
  data: {
    labels: ['VTech', 'PS4 Pro', 'PS1', 'PSP', 'Nintendo WIIU', 'Ninendo DS','PC'],
    datasets: [{
      label: 'Mijn meest bespeelde consoles',
      data: [1, 5, 1, 1, 4, 2, 3, 7],
      borderWidth: 1,
      backgroundColor: ['#DBDBDB','#BBBBBB'],
    }]
  },
});

new Chart(chart2, {
  type: 'bar',
  data: {
    labels: ['VTech', 'PS4 Pro', 'PS1', 'PSP', 'Nintendo WIIU', 'Ninendo DS','PC'],
    datasets: [{
      label: 'Mijn meest bespeelde consoles',
      data: [1, 5, 1, 1, 4, 2, 3, 7],
      borderWidth: 1,
      backgroundColor: ['#DBDBDB','#BBBBBB'],
    }]
  },
})


function getPokemon(){
for(i = 0; i < 10; i++){
  let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0, 
      ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, 
      psychic = 0, ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;
  
  const labels = ['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy','unknown','shadow'];

  let randomNumber = Math.floor(Math.random()*1025 + 1);

  let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/"+randomNumber)
                  .then(function(response){
                      return response.json();
                  })
                  .then(function(realData){
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

                    }    
                  )}
                }

  const dataPokemon = {
    labels: labels,
    datasets: [
      {
        label: "Pokemon types",
        data: [normal,fighting,flying,poison,ground,rock,bug,ghost,steel,fire,water,grass,electric,psychic,ice,dragon,dark,fairy,unknown,shadow],
        backgroundColor: ['#DBDBDB','#BBBBBB'],
      }
    ]
  }

  const configPokemon = {
    type: "bar",
    data: dataPokemon,
  }
  
  new Chart(document.getElementById("js--chart1"), config);

getPokemon();

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
