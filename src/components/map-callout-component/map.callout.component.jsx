import React from "react";
import { MyText } from "./map.callout.styles";
import CompactRestaurantInfo from "../mac-compact-restau-info/map.compact.restaurant.info.component.jsx";
const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} />
);

export default MapCallout;
