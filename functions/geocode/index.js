const { locations: locationsMock } = require('./geocode.mock'); // Import the locations data as locationMock from geocode.mock.js
const url = require('url'); // Import the url module to parse the request URL
module.exports.geocodeRequest = (req, res) => {
  const queryObject = url.parse(req.url, true).query; // Parse the request URL to get the query parameters
  const { city } = queryObject; // Extract the city parameter from the query parameters, usually separated by &in the request URL, e.g. "http://localhost:5001/reactnative-mealstogo/us-central1/geocode?city=san%20francisco"
  const locationMock = locationsMock[city.toLowerCase()]; // Get the mock data for the requested location
  //res.json(locationMock); // Send the locations data as the response to the HTTP request
  res.json(locationMock); // Send the locations data as the response to the HTTP request
};
