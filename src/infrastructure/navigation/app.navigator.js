import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
//import RestaurantsScreen from '../../features/screens/restaurant/restaurants.screen';
import RestaurantsNavigator from './restaurants.navigator';
import MapScreen from '../../features/screens/map/map.screen';
import SettingsScreen from '../../features/screens/settings/settings.screen';
const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  const TAB_ICON = {
    Restaurants: 'restaurant',
    Map: 'map',
    Settings: 'settings',
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Restaurant') {
            iconName = focused ? 'restaurant' : 'restaurant-outline'; //the name set here will be displayed in the tab as a tab name
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', //color when the tab is active
        tabBarInactiveTintColor: 'gray', //color when the tab is inactive
      })}
    >
      <Tab.Screen
        name="Restaurant"
        component={RestaurantsNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
