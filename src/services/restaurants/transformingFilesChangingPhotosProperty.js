// temporary file/program just to insert the very first images
///run and needed only once
import mockImages, { length } from "./index";

async function updateJson(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    const jsonData = JSON.parse(data);
    //console.log(jsonData.results[0]);
    console.log(mockImages[Math.floor(Math.random() * length)]);
    //jsonData.results;
    jsonData.results = jsonData.results.map((restaurant) => {
      restaurant.photos = restaurant.photos.map(() => {
        // console.log('photos', restaurant.photos);

        return mockImages[Math.floor(Math.random() * length)];
        /picking a random image from the array but this is not safe as the image get changed whenever the App is reloaded. having a fix image would be the safest solution/;
      });
      //console.log('photos last', restaurant);
      return {
        ...restaurant,
        isOpenNow:
          restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily:
          restaurant.business_status === "CLOSED_TEMPORARILY",
        address: restaurant.vicinity,
      };
    });

    await fs.writeFile(`new_${filename}`, JSON.stringify(jsonData, null, 2));

    console.log("JSON updated successfully!");
  } catch (error) {
    console.error(error);
  }
}

updateJson("antwerp.json");
updateJson("chicago.json");
updateJson("san_francisco.json");
updateJson("toronto.json");
//console.log(mockImages);
