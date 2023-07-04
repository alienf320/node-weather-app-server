const request = require("postman-request");

const geocode = (location, callback) => {
  const token =
    "pk.eyJ1IjoiY2NjbW1tY2NjIiwiYSI6ImNqZHpkNmg0dDMza3gzMnQzcWJvdDgzNWQifQ.4IQc3LFSoolZSPqGlNE7pw";
  const urlMap = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${token}&limit=1`;

  request({ url: urlMap, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to the server.", undefined);
    } else if (response.body.features.length === 0) {
      callback("No match found.");
    } else {
      const body = response.body;
      const long = body.features[0].center[1];
      const lat = body.features[0].center[0];
      callback(undefined, {
        long: long,
        lat: lat,
      });
    }
  });
};

module.exports = geocode;
