// app.config.js helps us to inject environment variables into the app at runtime, and also to configure the app based on the values in the .env file. We can use this file to read the values from the .env file and inject them into process.env, so that we can access them in the app at runtime. which is good for security
// read app.json and .env files, and inject the values into process.env
// This is necessary because the app.json file is not available at runtime, and we need to inject the values into process.env for the app to access them.
// but app.json shouldn't be deleted because it is used by expo to build the app, and it is also used by the app to access the values at runtime.
import "dotenv/config";
/*
import appJson from "./app.json";

const { expo } = appJson;
const { googleMaps } = expo?.android?.config || {};

if (googleMaps?.apiKey) {
  process.env.GOOGLE_MAPS_API_KEY = googleMaps.apiKey;
} */
export default ({ config }) => {
  return {
    ...config,
    android: {
      ...config.android,
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    },
  };
};
