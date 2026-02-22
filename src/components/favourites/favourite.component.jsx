import React, { useContext } from "react";
//import { AntDesign } from "@expo/vector-icons";

// Import the desired icon set, e.g., MaterialCommunityIcons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { FavouritesContext } from "@/src/services/favourites/favourites.context";
import { FavouriteButton } from "./favourite.styles";
const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites?.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <MaterialCommunityIcons
        name={isFavourite ? "heart" : "heart-outline"}
        size={50}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};

export default Favourite;
/**
 *       <AntDesign
name={isFavourite ? "heart" : "checkcircle"}
size={24}
color={isFavourite ? "red" : "white"}
/>
 */
