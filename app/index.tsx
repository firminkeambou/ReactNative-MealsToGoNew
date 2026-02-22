import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../src/infrastructure/theme/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import { RestaurantsContextProvider } from "../src/services/restaurants/restaurants.context";
//import { LocationContextProvider } from "../src/services/location/location.context";
//import FavouritesContextProvider from "../src/services/favourites/favourites.context";
import AuthenticationContextProvider from "../src/services/authentication/firebase/authentication.context";
import Navigation from "../src/infrastructure/navigation/index";

import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";

//import { signInAuthUserWithEmailAndPassword } from "../src/services/authentication/firebase/authentication.service";

export default function Index() {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  /*   useEffect(() => {
    loginEmailPassword();
  }, []); */
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  // handle authenticationn before rendering the App
  //if (!isAuthenticated) return null;
  return (
    <Fragment>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </SafeAreaProvider>
    </Fragment>
  );
}
