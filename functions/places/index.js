const { mocks: mocksPlaces } = require("./mock/places.mock"); // Import the locations data as locationMock from geocode.mock.js
const url = require("url"); // Import the url module to parse the request URL
module.exports.placesRequest = (req, res) => {
  const queryObject = url.parse(req.url, true).query; // Parse the request URL to get the query parameters
  const { lat, long } = queryObject; // Extract the city parameter from the query parameters, usually separated by &in the request URL, e.g. "http://localhost:5001/reactnative-mealstogo/us-central1/geocode?city=san%20francisco"
  const locatedPlaces = mocksPlaces[`${lat},${long}`]; // Get the mock data for the requested location
  //res.json(locationMock); // Send the locations data as the response to the HTTP request
  res.json(locatedPlaces); // Send the locations data as the response to the HTTP request
};
