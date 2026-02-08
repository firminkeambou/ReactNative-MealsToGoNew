import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../src/infrastructure/theme/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RestaurantsContextProvider } from '../src/services/restaurants/restaurants.context';
import { LocationContextProvider } from '../src/services/location/location.context';
import Navigation from '../src/infrastructure/navigation/index';
//import { restaurantsRequest } from './src/services/restaurants/restaurants.service';
//import { Spacer, getVariant } from './src/components/spacer/spacer.component';
//NavigationContainer is not needed with expo-router otherwise, you will create a conflict
//import { NavigationContainer } from '@react-navigation/native';
import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald';

export default function Index() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  //then()  ; because it returns a promise
  /*restaurantsRequest()
    .then((r) => {
      console.log(JSON.stringify(r, null, 2)); //pretty print with indentation(2 spaces ) and replacer which alters stringification process is null here
    })
    .catch((e) => {
      console.log(e);
    });*/
  //console.log(theme);
  //console.log(TAB_ICON);
  //console.log(getVariant('bottom', 'large'));
  //dealing with fonts
  //<RestaurantsScreen />
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <Fragment>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </SafeAreaProvider>
    </Fragment>
  );
}
