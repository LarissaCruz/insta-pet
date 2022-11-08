import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login/index"

import Register from "../screens/Register/index"

export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
  Home: any;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthRouter: FunctionComponent = () => {
  return (

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
 
  );
};

export default AuthRouter;
