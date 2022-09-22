import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import { colors } from "../components/colors";
import BigText from "../components/Texts/BigText";

export type RootStackParamList = {
  Welcome: undefined;
  Home: any;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
