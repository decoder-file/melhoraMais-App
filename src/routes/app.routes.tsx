import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CreateTag } from "../screens/CreateTag";
import { Dashboard } from "../screens/Dashboard";
import { RegisterCalculation } from "../screens/RegisterCalculation";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Dashboard">
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
