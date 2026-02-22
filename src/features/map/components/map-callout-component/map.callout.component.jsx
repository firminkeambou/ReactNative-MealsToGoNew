import React from "react";

import CompactRestaurantInfo from "../map-compact-restau-info/map.compact.restaurant.info.component";
const MapCallout = ({ restaurant }) => (
  //isMap props is used below here  because Image component only has problem inside a mapview with android
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);

export default MapCallout;
