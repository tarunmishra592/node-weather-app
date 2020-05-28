const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidGFydW5rZWxsdG9uIiwiYSI6ImNrYW5weGowNDBqNmsyenBmemU0bmxkYXMifQ.JQot4v5f3p4TsYcU8of20g&limit=1`;
  request({url: url, json: true}, (error, {body}) => {
    if(error){
      callback('Unable to connect with server!', undefined);
    } else if(body.features.length === 0){
      callback('Unable to find Location!', undefined);
    } else {
      const data = body;
      const newData = {
        latitute: data.features[0].center[1],
        longitude: data.features[0].center[0],
        location: data.features[0].place_name
      }
      callback(undefined, newData);
    }
  })
}


module.exports = geocode;