import React from "react";
//import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native";
import CompactRestaurantInfo from "../../features/map/components/map-compact-restau-info/map.compact.restaurant.info.component";
import Spacer from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { FavouritesWrapper } from "./favourite.styles";
const FavouritesBar = ({ favourites }) => {
  const navigation = useNavigation();
  if (!favourites.length) return null; // only render something when favourites lenth is not null
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption"> Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant, // Optional: pass params to the target screen
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
