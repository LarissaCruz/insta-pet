import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../components/colors";
import BigText from "../components/Texts/BigText";
import TabNavigation from "./TabBar";

import EditProfile from "../screens/EditProfile";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";

export type RootStackParamList = {
  TabNavigation: any;
  EditProfile:any;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppRouter: FunctionComponent = () => {
  return (
  
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
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              headerTitle: (props) => <RegularText textStyles={{ fontSize: 24 }}>Editar Perfil</RegularText>,
              headerRight: () => (
                <SmallText  textStyles={{marginRight: 10 }}>
                  *Obrigatorio
                </SmallText>
              ),
            }}
          />
      </Stack.Navigator>
    
  );
};

export default AppRouter;
