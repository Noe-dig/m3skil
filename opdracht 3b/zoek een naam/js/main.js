const pokemonImage = document.getElementById("js--pokemonImage");

//show
const seriesName = document.getElementById("js--seriesName");
const seriesSummary = document.getElementById("js--seriesSummary");

document.getElementById("js--serieSubmit").onclick = function(){
    let titelRequest = document.getElementById("js--serieTitelInput").value;
    console.log(titelRequest);

    fetch("https://api.tvmaze.com/search/shows?q="+titelRequest)
            .then(response => response.json())
            .then(realData => {
                if (realData.length > 0) {
                    const show = realData[0].show;

                    document.getElementById("js--naamSerieOutput").innerHTML = show.name;
                    document.getElementById("js--summarySerieOutput").innerHTML = show.summary;
                } 
                else {
                    document.getElementById("js--summarySerieOutput").innerHTML = "Sorry, no shows found! <br> check for spelling mistakes";
                }
                });
}


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
const nameText = document.getElementById("js--naamOutput");
const inputField = document.getElementById("js--naamInput");
inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        let name = inputField.value;
        let age = fetch("https://api.agify.io/?name="+name)
            .then(function(response){
                return response.json();
            })
            .then(function(persoonData){
                console.log(persoonData);
                nameText.innerText = "geschatte leeftijd "+persoonData.name+": "+persoonData.age;
            });
    }
}