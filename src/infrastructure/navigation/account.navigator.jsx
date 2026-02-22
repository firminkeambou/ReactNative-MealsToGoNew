import React from "react";
//import { View, Text } from "react-native";
//import { createStackNavigator } from "@react-navigation/stack";
//import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../features/account/screens/account.screen";
import LoginScreen from "../../features/account/screens/login.screen";
import RegisterScreen from "../../features/account/screens/register.screen";
//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="main"
        options={{
          headerShown: false,
        }}
        component={AccountScreen}
      />
      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
          presentation: "transparentModal",
        }}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
