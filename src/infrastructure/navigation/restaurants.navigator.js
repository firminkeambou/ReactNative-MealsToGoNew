import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";

import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail-screen/restautrant-detail-screen.component";
const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  {
    /* making a navigation modal {stack and transition Presets}
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS, // Add this line to apply the modal transition
      }}
    >
    */
  }
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS, // Add this line to apply the modal transition
      }}
    >
      {/* You can add more screens related to restaurants here */}
      {/*by default, the first screen will be the initial screen*/}
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen} // Make sure to import RestaurantsScreen
        options={{ headerShown: false }} // Hide header if needed
      />
      {/* this will make the prop "navigation" available to RestaurantsScreen component */}
      <RestaurantStack.Screen
        name="RestaurantDetail" // name of the details screen
        component={RestaurantDetailScreen} // Make sure to import RestaurantsScreen
        options={{ headerShown: false }} // Hide header if needed
      />
    </RestaurantStack.Navigator>
  );
};
export default RestaurantsNavigator;
