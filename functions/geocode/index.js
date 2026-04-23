const { locations: locationsMock } = require("./geocode.mock"); // Import the locations data as locationMock from geocode.mock.js
const url = require("url"); // Import the url module to parse the request URL
module.exports.geocodeRequest = (req, res, client, mySecret) => {
  const queryObject = url.parse(req.url, true).query; // Parse the request URL to get the query parameters
  const { city, mock } = queryObject; // Extract the city and mock parameters from the query parameters, usually separated by &in the request URL, e.g. "http://localhost:5001/reactnative-mealstogo/us-central1/geocode?city=san%20francisco"
  // testing if we are  mocking data (meaning simulating tests)
  if (mock === "true") {
    //focusing on the string value, not the boolean aspect of it
    const locationMock = locationsMock[city.toLowerCase()]; // Get the mock data for the requested location
    //res.json(locationMock); // Send the locations data as the response to the HTTP request
    return res.json(locationMock); // Send the locations data as the response to the HTTP request
  }
  //console.log("secret:",mySecret.value())
  client
    .geocode({
      params: {
        address: city,
        // key: "YOUR_API_KEY", // Replace with your actual API Key
        key: mySecret.value(),
      },
      timeout: 5000, // milliseconds
    })
    .then((result) => {
      console.log("result from API", result.data.results[0].geometry.location);
      return res.json(result.data);
    })
    .catch((e) => {
      console.log(e.response.data.error_message);
      res.status(400);
      return res.send(e.response.data.error_message);
    });
};
