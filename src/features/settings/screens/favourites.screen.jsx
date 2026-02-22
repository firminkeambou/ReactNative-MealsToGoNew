import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
//import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "@/src/services/favourites/favourites.context";

import Spacer from "@/src/components/spacer/spacer.component";
import RestaurantInfoCard from "../../restaurants/components/restaurants-info/restautant-info-card.component";
import {
  FavouritesList,
  BasicText,
  FavouritesArea,
} from "./settings.screen.styles";

const FavouritesScreen = () => {
  const navigation = useNavigation();
  const { favourites } = useContext(FavouritesContext);
  console.log("favourites in screen:", favourites.length);
  return (
    <FavouritesArea>
      {favourites.length ? (
        <FavouritesList
          data={favourites}
          renderItem={({ item }) => {
            console.log("restaurant+++++++++++==========++++++:", item);
            return (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Restaurant", {
                      screen: "RestaurantDetail",
                      params: { restaurant: item }, // Optional: pass params to the target screen
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              </>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <BasicText> No favourites yet</BasicText>
      )}
    </FavouritesArea>
  );
};

export default FavouritesScreen;
