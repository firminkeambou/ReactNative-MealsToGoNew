import camelize from 'camelize';
//import { locations } from '../../../functions/geocode/geocode.mock';
// locationRequest() can be called by default in restaurants.screen.jsx in order to test out if it works
export const locationRequest = async (searchTerm = 'san francisco') => {
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
    const response = await fetch(
      `http://127.0.0.1:5001/mealstogoreactnativ/us-central1/geocode?city=${searchTerm}`,
      {
        method: 'GET',
      },
    );
    const data = await response.json();
    console.log(
      'Location request new from location.service.js/locationRequest function',
      data,
    );
    return locationTransform(data);
  } catch (error) {
    console.error('Error fetching location data:', error);
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
    'Location request new from location.service.js/restaurants.screen.jsx',
    latLongString,
  );
  return { latLongString, viewport, lat, lng };
};
