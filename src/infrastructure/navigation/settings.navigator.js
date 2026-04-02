import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import React from "react";

import SettingsScreen from "../../features/settings/screens/settings.screen";
import FavouritesScreen from "../../features/settings/screens/favourites.screen";
import CameraScreen from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  {
    /* making a navigation modal {stack and transition Presets}
    <SettingsStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS, // Add this line to apply the modal transition
      }}
    >
    */
  }
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Add this line to apply the horizontal slide transition
      }}
    >
      {/* You can add more screens related to restaurants here */}
      {/*by default, the first screen will be the initial screen*/}
      <SettingsStack.Screen
        name="settings"
        component={SettingsScreen} // Make sure to import SettingsScreen
        options={{ headerShown: false }} // Hide header if needed
      />
      {/* this will make the prop "navigation" available to SettingsScreen component */}
      <SettingsStack.Screen
        name="Favourites" // name of the screen
        component={FavouritesScreen}
        options={{ headerShown: true }} // Hide header if needed
      />
      <SettingsStack.Screen
        name="Camera" // name of the screen
        component={CameraScreen}
        options={{ headerShown: true }} // Hide header if needed
      />
    </SettingsStack.Navigator>
  );
};
export default SettingsNavigator;
