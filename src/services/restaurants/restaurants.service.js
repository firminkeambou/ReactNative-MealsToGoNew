import camelize from "camelize";
import { hostPlaces } from "../../utils/env";
export const restaurantsRequest = async (latitude, longitude) => {
  //location = '37.7749295,-122.4194155'
  //default location == san francisco
  //
  try {
    const response = await fetch(
      `${hostPlaces}?lat=${latitude}&long=${longitude}`,
      {
        method: "GET",
      },
    );
    const data = await response.json();
    /* console.log(
      "Location request new from restaurants.service.js/restaurantsRequest function",
      data,
    ); */
    return restaurantsTransform(data);
  } catch (error) {
    console.error("Error fetching location data:", error);
  }
  /////;;;;;;;;;;;;;;;;;;
  /* return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject(new Error("Location not found"));
    }
    //we could simply do: resolve(restaurantsTransform(mock)); down below
    //but to simulate a network request, we will use setTimeout
    setTimeout(() => {
      resolve(restaurantsTransform(mock));
    }, 3000); //3 seconds delay to simulate network request
  }); */
};
const restaurantsTransform = ({ results = [] }) => {
  // destructuring as we know we have "results" in the answer

  const mappedResults = results.map((restaurant) => {
    // below section no longer needed as I transformed the file using node.js
    /* restaurant.photos = restaurant.photos.map(() => {
      return mockImages[
        Math.floor(Math.random() * mockImages.length)
      ];  */

    /*picking a random image from the array but this is not safe as the image get changed whenever the App is reloaded. having a fix image would be the safest solution*/
    //});
    //adding isOpenNow and isClosedTemporarily properties to each restaurant object
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  const newResult = camelize(mappedResults); //camelize changes snake_case to camelCase
  return newResult;
};
//testing, it doesn't always work. i will get rid of it ASAP
/*restaurantsRequest()
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log(e);
  });
*/
