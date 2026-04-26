// bear in mind that firebase functions works better in ios simulator as Android do not allow fetching data using "Local Host"
import camelize from "camelize";
import { hostLocation, liveHostLocation } from "../../utils/env";

//import { locations } from '../../../functions/geocode/geocode.mock';
// locationRequest() can be called by default in restaurants.screen.jsx in order to test out if it works
export const locationRequest = async (searchTerm = "san francisco") => {
  /* //default location == san francisco
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      return reject(new Error('Location not found'));
    }
    //we could simply do: resolve(restaurantsTransform(mock)); down below
    //but to simulate a network request, we will use setTimeout
    setTimeout(() => {
      resolve(locationTransform(locationMock));
    }, 1000); //4 seconds delay to simulate network request
  });
 */
  //simulating a network request using fetch to our own backend (firebase function) that emulates the back end
  /* return fetch(
    `http://127.0.0.1:5001/mealstogoreactnativ/us-central1/geocode?city=${searchTerm}`,
    {
      method: 'GET',
    },
  )
    .then((response) => response.json())
    .then((data) => locationTransform(data)); */
  //.catch((error) => console.error('Error fetching location data:', error));
  // we can also use async/await syntax instead of .then() and .catch() for better readability
  //http://127.0.0.1:5001/mealstogoreactnativ/us-central1/geocode?city=${searchTerm}`
  try {
    //read carefully ${hostLocation} ; only work on simulator , not in real devices//error developpment

    //use this (${liveHostLocation}) if we want to test on real device
    const response = await fetch(`${liveHostLocation}?city=${searchTerm}`, {
      method: "GET",
    });
    //use the following  with simulators
    /* console.log("root string:", `${hostLocation}?city=${searchTerm}`);
    const response = await fetch(`${hostLocation}?city=${searchTerm}`, {
      method: "GET",
    }); */
    const data = await response.json();
    console.log(
      "Location request new from location.service.js/locationRequest function",
      data,
    );
    return locationTransform(data);
  } catch (error) {
    console.error("Error fetching location data:", error, "free");
  }
  //locationTransform(locationMock)
};
// transforming the data to camel case and extracting lat and lng
const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  const viewport = geometry.viewport;
  const latLongString = `${lat},${lng}`; // to be used in restaurants request as location parameter takes a string "lat,lng"
  console.log(
    "Location request new from location.service.js/restaurants.screen.jsx",
    latLongString,
  );
  return { latLongString, viewport, lat, lng };
  /* return {
    latLongString: "37.7749295,-122.4194155",
    viewport: null,
    lat: "37.7749295",
    lng: "-122.4194155",
  }; */
};
