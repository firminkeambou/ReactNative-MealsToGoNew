/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { setGlobalOptions } = require('firebase-functions');
//const { onRequest } = require('firebase-functions/https');
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const logger = require('firebase-functions/logger');
const { geocodeRequest } = require('./geocode'); // it works because of the presence of the index.js file within "geocode" directory Import the geocodeRequest function from the geocode module
const { placesRequest } = require('./places'); //it will make use of index.js inside "restaurants"

const { Client } = require('@googlemaps/google-maps-services-js');
// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });
//** begin firmin */

//end firmin

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
// this is a sample(to test out) function that logs "Hello logs!" and responds with "Hello from Firebase bro!" when called via HTTP request.

const client = new Client({});// Create a new instance of the Google Maps API client
// Define the secret reference,//we are integrating places/geocode API
const mySecret = defineSecret("GOOGLE_MAP_API_KEY"); // this key was defined under functions directory === $firebase functions:secrets:set GOOGLE_MAP_API_KEY and restarted the back end

// helloworld is only for testing purposes
const helloWorld = onRequest({ secrets: [mySecret] },(request, response) => {
  logger.info('Hello logs!', {
    structuredData: true,
    example: 'Structured data example',
  });
   response.send(`The secret API key is as `); //${mySecret.value()}
  //response.send('Hello from Firebase bro!');
}); 

// function that can be called via HTTP request.
// geocode returns back coordinates of the location searched or requested
const geocode = onRequest({ cors: true,secrets: [mySecret]  }, (req, res) => {
  geocodeRequest(req, res, client,mySecret); // Pass the Google Maps API client to the geocodeRequest function
});
// the below function/firebase functions /FaaS returns back nearby places(restaurants) related to the geocodes enter as a query parameter when invoking the endpoint
const placesNearby = onRequest({ cors: true,secrets: [mySecret]  }, (req, res) => {
  placesRequest(req, res,client); // Pass the Google Maps API client to the placesRequest function
});

module.exports = {
  helloWorld,
  geocode,
  placesNearby,
};
