import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParamList = {
  Login: undefined;
  Home: any;
};

const Stack = createStackNavigator<RootStackParamList>();

const AuthStackNavigator: FunctionComponent = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{
            headerShown: false,
            }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigator;
