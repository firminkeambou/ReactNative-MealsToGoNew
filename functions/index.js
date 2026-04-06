/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { setGlobalOptions } = require('firebase-functions');
const { onRequest } = require('firebase-functions/https');
const logger = require('firebase-functions/logger');
const { geocodeRequest } = require('./geocode'); // it works because of the presence of the index.js file within "geocode" directory Import the geocodeRequest function from the geocode module
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
const helloWorld = onRequest((request, response) => {
  logger.info('Hello logs!', {
    structuredData: true,
    example: 'Structured data example',
  });
  response.send('Hello from Firebase bro!');
});
// function that can be called via HTTP request.
const geocode = onRequest({ cors: true }, (req, res) => {
  geocodeRequest(req, res);
});

module.exports = {
  helloWorld,
  geocode,
};
