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
import Publish from "../screens/Publish";
import Contact from "../screens/Contact";

export type RootStackParamList = {
  RootStack: any;
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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
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
        }}
        initialRouteName="RootStack"
      >
        <Tab.Screen
          name="RootStack"
          component={RootStack}
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
    </NavigationContainer>
  );
};

export default TabNavigation;
