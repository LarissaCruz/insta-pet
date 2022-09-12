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
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          borderBottomWidth: 0,
          shadowColor: "transparent",
          shadowOpacity: 0,
          elevation: 0,
          height: 100,
        },

        headerTintColor: colors.black,
        headerTitleAlign: "center",
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <BigText>Instapet</BigText>,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
