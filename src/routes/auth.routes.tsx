import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../screens/Login";
import { Registration } from "../screens/Registration";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Login">
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
