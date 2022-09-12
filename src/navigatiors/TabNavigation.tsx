import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RootStack from "./RootStack";
import { colors } from "../components/colors";
import BigText from "../components/Texts/BigText";
import styled from "styled-components/native";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

export type RootStackParamList = {
  RootStack: any;
  Circles: any;
  Contacts: any;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const IconTabRound = styled.View`
  width: 48;
  height: 48;
  border-radius: 40;
  margin-bottom: 20;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
`;

const TabNavigation: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="RootStack"
          component={RootStack}
          options={{
            headerShown: false,
            tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Circles"
          component={RootStack}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <View>
                <IconTabRound>
                  <Octicons name="plus" size={20} color={colors.black} />
                </IconTabRound>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={RootStack}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <FontAwesome name="user" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
