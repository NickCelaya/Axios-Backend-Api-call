const axios = require("axios");
const key = require("./../config.js");



exports.getNames = (req, res) => {
  return axios.get("https://swapi.co/api/" + key.peopleKey).then( (response) => {

    console.log("Darth Maul is the best sith");

    res.status(200).send(response.data.results)
  })
};

//plantKey

exports.getPlanets = (req, res) => {
  return axios.get("https://swapi.co/api/" + key.planetKey).then( (response) => {

    console.log("Not on tattooine anymore");

    res.status(200).send(response.data.results)
  })
};


exports.getVehicles = (req, res) => {
  return axios.get("https://swapi.co/api/" + key.vehiclesKey).then( (response) => {

    console.log("X-Wing Fighters");
    res.status(200).send(response.data.results)
  })
};
