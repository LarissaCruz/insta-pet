import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../components/colors";
import BigText from "../components/Texts/BigText";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParamList = {
  Welcome: undefined;
  TabNavigation: any;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStackNavigator: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTitle: (props) => <BigText>Instapet</BigText>,
          headerTintColor: colors.black,
          headerTitleAlign: "center",
          }}>
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
