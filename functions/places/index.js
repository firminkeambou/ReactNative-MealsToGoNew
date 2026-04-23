const { Client } = require("@googlemaps/google-maps-services-js");
const { mocks: mocksPlaces } = require("./mock/places.mock"); // Import the locations data as locationMock from geocode.mock.js
//const { mySecret } = require("../index"); //importing Google API key
const url = require("url"); // Import the url module to parse the request URL

module.exports.placesRequest = (req, res, client, mySecret) => {
  const queryObject = url.parse(req.url, true).query; // Parse the request URL to get the query parameters
  const { lat, long, mock } = queryObject; // add mock for mocking data; Extract the city parameter from the query parameters, usually separated by &in the request URL, e.g. "http://localhost:5001/reactnative-mealstogo/us-central1/geocode?city=san%20francisco"
  if (mock === "true") {
    const locatedPlaces = mocksPlaces[`${lat},${long}`]; // Get the mock data for the requested location
    //res.json(locationMock); // Send the locations data as the response to the HTTP request
    return res.json(locatedPlaces); // Send the locations data as the response to the HTTP request
  }
  // If mock is not true, proceed with the actual API request to Google Maps API to get nearby places
// defining a helper function
  const addGoogleImage = (place) => {
    // place  here is a reference to the restaurant
    const photoRef = place.photos[0].photo_reference;
    if (!photoRef) {
      place.photos = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEl05F5JrOQMJb6iDsPYkaYiSx_7EZmc_d4g&s",
      ];
      return place;
    }
    place.photos = [
      `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&maxwidth=400&key=${mySecret.value()}`,
    ];
    return place;
  };
// end of helper function definition

  client
    .placesNearby({
      params: {
        location: [lat, long], //40.7128, -74.006 Lat, Lng
        radius: 1500, // Search within 1500 meters
        type: "restaurant", // Optional: filter by type
        key: mySecret.value(),
      },
      timeout: 5000, // milliseconds
    })
    .then((result) => {
      //console.log("result from API", result.data.results[0].geometry.location);
      // dealing with images before returning data
      //console.log('frrrrrrrrr-------------------',result)
      result.data.results = result.data.results.map(addGoogleImage);
      //result.results = result.results.map(addGoogleImage);
      return res.json(result.data);
    })
    .catch((e) => {
     //console.log("ggg",e.response.data.error_message);
     console.log("ggg", e);
      res.status(400);
      return res.send(e.response.data.error_message);
      //return res.send(e);
    });
};
