import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import Card from "../components/Card/Card";
import { FlatList } from "react-native";
import SmallText from "../components/Texts/SmallText";
import Avatar from "../components/Avatar/Avatar";
import Button from "../components/Button/Button";
import { AlignCenter, SpaceBetween } from "../components/shared";
import RegularText from "../components/Texts/RegularText";
import { MaterialIcons } from "@expo/vector-icons";

const HomeContainer = styled(Container)`
  background-color: ${colors.white};
  width: 100%;
`;
const Login: FunctionComponent = () => {
  return (
    <HomeContainer>
      <RegularText textStyles={{ fontSize: 24 }}>Perfil</RegularText>
      <SmallText textStyles={{ color: "white", fontSize: 12 }}>
     
    </HomeContainer>
  );
};

export default Login;
