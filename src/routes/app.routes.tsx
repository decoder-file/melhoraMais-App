import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../screens/Login";
import { CreateTag } from "../screens/CreateTag";
import { Dashboard } from "../screens/Dashboard";
import { RegisterCalculation } from "../screens/RegisterCalculation";
import { Registration } from "../screens/Registration";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Login">
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
      <Screen
        name="CreateTag"
        component={CreateTag}
        options={{ headerShown: false }}
      />
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Screen
        name="RegisterCalculation"
        component={RegisterCalculation}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
