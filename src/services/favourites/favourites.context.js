import React, { useState, createContext, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/firebase/authentication.context";
export const FavouritesContext = createContext({
  favourites: [],
});

const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  // local storage
  const saveFavouritesToLocalStorage = async (favourites, uid) => {
    //instead of (key, value), we keep on value as the "key" is fixed and not dynamic
    try {
      const key = `4favourites-${uid}`;
      const jsonFavourites = JSON.stringify(favourites); // stringify because "value" is an object
      await AsyncStorage.setItem(key, jsonFavourites); // we consider as key "@favourites"
      //console.log("favourite saved successfully", jsonFavourites);
    } catch (error) {
      console.error("Error saving favourite:", error);
    }
  };

  const loadFavouritesFromLocalStorage = async (uid) => {
    try {
      const key = `4favourites-${uid}`;
      //console.log("key used to retrieve favourite:", key);
      const favouritesLocal = await AsyncStorage.getItem(key);
      //console.log("Retrieved before parsing:", favouritesLocal);
      if (favouritesLocal !== null) {
        setFavourites(JSON.parse(favouritesLocal));
        // console.log("Retrieved favourite after:", JSON.parse(favouritesLocal));
        //return favouritesLocal;
      }
    } catch (error) {
      console.error("Error retrieving favourite:", error);
    }
  };

  // end dealing with local storage, adding or removing item in the favourite
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (restau) => restau.placeId !== restaurant.placeId,
    );
    setFavourites(newFavourites);
  };

  const value = {
    favourites,
    addToFavourites: add,
    removeFromFavourites: remove,
  };
  useEffect(() => {
    if (user) {
      //console.log("user id:", user.uid);
      loadFavouritesFromLocalStorage(user.uid);
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      saveFavouritesToLocalStorage(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
