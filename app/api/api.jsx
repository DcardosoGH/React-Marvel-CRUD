// Plugin for HTTP Requests
var axios = require('axios');

// Using npm json-loader to load local json file
const json = require('json-loader!./heroes.json');

// Marvel API Variables -- See Documentation here: https://developer.marvel.com/documentation/authorization
var md5 = require('md5');
var privKey = '8d68605a2ea0f62f136e4900cd915a04efb483bf';
var pubKey = 'de5e0c2d7b4daf49b5bd92637300cc1f';
var ts = new Date().getTime();
var hash = md5(ts + privKey + pubKey);
var charID = '1009718'; // testing wolverine
const url = 'https://gateway.marvel.com:443/v1/public/characters?name'

module.exports = {
    // API Call Function
    getHeroes: function(hero){

        var encodedHero = encodeURIComponent(hero);
        var requestURL = `${url}=${encodedHero}&ts=${ts}&apikey=${pubKey}&hash=${hash}`;
        

        return axios.get(requestURL).then(function (res){
                console.log(json.heroes) 
                var heroDesc =  res.data.data.results[0].description;
                var heroName = res.data.data.results[0].name;
                var heroImg =  res.data.data.results[0].thumbnail.path +'.'+ res.data.data.results[0].thumbnail.extension;
                var Hero = [heroName,heroDesc,heroImg];
                return Hero;
        },function(res) {
            throw new Error('Hero was not found.')
        });
    },

    addHero: function(name,desc){
        var new_id = json.heroes.length;
        var Hero = {
            id: (new_id++),
            name: name,
            description: desc,
            img: {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5261a7f7b0917.jpg",
              extension: "jpg"
            }
        };
        json.heroes.push(Hero);
    }
}
