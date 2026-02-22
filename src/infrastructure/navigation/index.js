import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/firebase/authentication.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import FavouritesContextProvider from "../../services/favourites/favourites.context";
//import { View, Text } from "react-native";
import AppNavigator from "./app.navigator";
import AccountNavigator from "./account.navigator";
import { AppNavigationContainer } from "./navigation.styles";
const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  /**(
   <>
     <AppNavigationContainer>
       {isAuthenticated ? <AppNavigator /> : <AccountNavigator />};
     </AppNavigationContainer>
   </>
 ); */

  // we will be wrapping "AppNavigator"  with contexts providers that only have something to do with app features, this way, we will ensure they get unmounted when we switch to account navigator and that app can identified the right user connected
  return (
    <AppNavigationContainer>
      {isAuthenticated ? (
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      ) : (
        <AccountNavigator />
      )}
    </AppNavigationContainer>
  );
};

export default Navigation;
