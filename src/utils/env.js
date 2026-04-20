export const liveHostPlaces = 'https://placesnearby-egzhedobkq-uc.a.run.app';
const localHostPlaces =
  'http://127.0.0.1:5001/mealstogoreactnativ/us-central1/placesNearby';
//console.log("environnment we are in", process.env.NODE_ENV);
export const liveHostLocation = 'https://geocode-egzhedobkq-uc.a.run.app';
const localHostLocation =
  'http://127.0.0.1:5001/mealstogoreactnativ/us-central1/geocode';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const hostPlaces = isDevelopment ? localHostPlaces : liveHostPlaces;

export const hostLocation = isDevelopment
  ? localHostLocation
  : liveHostLocation;
