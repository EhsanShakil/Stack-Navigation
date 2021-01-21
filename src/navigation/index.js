import React from "react";
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Setting} />
    </Stack.Navigator>
  );
};
