const pokemonImage = document.getElementById("js--pokemonImage");

//serie
let serie = fetch("https://api.tvmaze.com/search/shows?q="+titelRequest)
                .then(function(response){
                    return response.json();
                })
                .then(function(realData){
                     showNaam.src = realData.show.name;
                     showSummary.src = realData.show.summary;
                });
const seriesName = document.getElementById("js--seriesName");
const seriesSummary = document.getElementById("js--seriesSummary");

//pokemon
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

//leeftijd





