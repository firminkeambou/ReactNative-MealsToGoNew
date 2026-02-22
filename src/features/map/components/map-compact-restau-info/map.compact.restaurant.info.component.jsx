import React from "react";
import {
  Item,
  CompactImage,
  CompactWebview,
} from "./map.compact.restaurant.info.styles";
import { Platform } from "react-native";
import { Text } from "../../../../components/typography/text.component";

const isAndroid = Platform.OS === "android";
const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  //isMap props is used here  because Image component only has problem inside a mapview with android, so when no callout with map, the problem is gone
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
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
