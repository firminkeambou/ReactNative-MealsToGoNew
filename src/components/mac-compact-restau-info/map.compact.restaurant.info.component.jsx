import React from "react";
import {
  Item,
  CompactImage,
  CompactWebview,
} from "./map.compact.restaurant.info.styles";
import { Platform } from "react-native";
import { Text } from "../typography/text.component";

const isAndroid = Platform.OS === "android";
const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
