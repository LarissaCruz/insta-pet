import React, { FunctionComponent } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../components/colors";
import BigText from "../components/Texts/BigText";
import styled from "styled-components/native";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import Publish from "../screens/Publish";
import Contact from "../screens/Contact";
import Home from "../screens/Home";

export type RootStackParamList = {
  Home: any;
  Circles: any;
  Contacts: any;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const IconTabRound = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  box-shadow: 2px 2px 4px rgb(30, 30, 30, 0.25);
  elevation: 1;
`;

const TabNavigation: FunctionComponent = () => {
  return (
      <Tab.Navigator
       screenOptions={{
         tabBarShowLabel: false,
          headerTintColor: colors.black,
          headerShown: false,
       }}
       initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="home"
                size={24}
                color={focused ? "rgba(192, 150, 242, 1)" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Circles"
          component={Publish}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <IconTabRound>
                  <Octicons
                    name="plus"
                    size={28}
                    color={focused ? "white" : "black"}
                  />
                </IconTabRound>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contact}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="user"
                size={24}
                color={focused ? "rgba(192, 150, 242, 1)" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default TabNavigation;
