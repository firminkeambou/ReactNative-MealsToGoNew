import camelize from 'camelize';
import { locations } from './location.mock';
// locationRequest() can be called by default in restaurants.screen.jsx in order to test out if it works
export const locationRequest = (searchTerm = 'san francisco') => {
  //default location == san francisco
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
    latLongString
  );
  return { latLongString, viewport, lat, lng };
};
