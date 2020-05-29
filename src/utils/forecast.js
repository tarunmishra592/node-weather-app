const request = require('request');

const forcase = (latitute, longitute, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=71dea1d1d9df0f7fef68e34e36150851&query=${latitute},${longitute}`;
    request({url, json: true}, (error, {body}) => {
      if (error) {
        callback('Unable to connect to weather service!', undefined);
      } else if (body.error){
        callback('Unable to find location!', undefined);
      } else {
        const data = body;
        callback(undefined, `${data.current.weather_descriptions[0]}. It is currentely ${data.current.temperature} degree out. Thsre is ${data.current.precip} chance of rain`);
      }
  })
}

module.exports = forcase;