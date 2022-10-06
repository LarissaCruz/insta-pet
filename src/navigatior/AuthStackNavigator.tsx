import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import Register from "../screens/Register";

export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
  Home: any;
};

const Stack = createStackNavigator<AuthStackParamList>();

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
          <Stack.Screen
              name="Register"
              component={Register}
              options={{
              headerShown: false,
              }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigator;
