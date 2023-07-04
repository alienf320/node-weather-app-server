const request = require("postman-request");
const key = "4bf77eb784fd6b762d89b38f3a598a29";

const forecast = (lat, long, callback) => {
  const coord = `${lat},${long}`;
  const url = `http://api.weatherstack.com/current?access_key=${key}&query=${coord}`;
  //console.log(url)
  request({ url, json: true }, (error, response, body) => {
    //console.log(response.body)
    if (error) {
      callback("Unable to connect to the server");
    } else if (response.body.error) {
      callback(`${response.body.error.code}: ${response.body.error.info}`);
    } else {
      const data = response.body;
      const temp = data.current.temperature;
      const rain = data.current.precip;

      callback(undefined, {
        temperature: temp,
        rain: rain,
        location: data.location.name + ', '+ data.location.country
      });
    }
  });
};

module.exports = forecast;
