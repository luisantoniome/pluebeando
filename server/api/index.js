import "isomorphic-fetch"
import config from './config'
const request = require('request');

const { client_id } = config
const { client_secret } = config
// const URL = `https://api.foursquare.com/v2/venues/search?v=20161016&ll=21.1055984,-86.83784639999999&intent=checkin&radius=250&client_id=${client_id}&client_secret=${client_secret}`

// function getPlaces() {
//   const url = URL;
//   return fetch(url)
//     .then(res => res.json())
//     // .then(json => json.topartists.artist)
// }

let jsonData = ''

const json = request({
  url: 'https://api.foursquare.com/v2/venues/49d51ce3f964a520675c1fe3',
  method: 'GET',
  qs: {
    client_id: client_id,
    client_secret: client_secret,
    // ll: '40.7243,-74.0018',
    // query: 'coffee',
    // v: '20170801',
    v: '20131016'
    // limit: 1
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
    jsonData = body
    exports.testData = jsonData
  }
});

// jsonData = json

// // exports.jsonData = jsonData
// exports.testData = jsonData