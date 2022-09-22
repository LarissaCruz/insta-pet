import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import Card from "../components/Card/Card";
import { FlatList } from "react-native";
import SmallText from "../components/Texts/SmallText";
import BigText from "../components/Texts/BigText";
import Avatar from "../components/Avatar/Avatar";
import Button from "../components/Button/Button";
import { AlignCenter, SpaceBetween } from "../components/shared";
import RegularText from "../components/Texts/RegularText";
import { MaterialIcons } from "@expo/vector-icons";
import imageWelcome from "../assets/image/imageWelcome.png";
import Input from "../components/Inputs/Input";
import { AntDesign } from "@expo/vector-icons";

const HomeContainer = styled(Container)`
  background-color: ${colors.white};
  padding: 16px;
`;
const ImageComponent = styled.Image`
  width: 194;
  heigth: 194;
`;
const Login: FunctionComponent = () => {
  return (
    <HomeContainer>
      <AlignCenter>
        <BigText>Instapet</BigText>
      </AlignCenter>
      <AlignCenter>
        <ImageComponent source={imageWelcome} />
        <SmallText>A rede social do seu bichinho</SmallText>
      </AlignCenter>
      <Input label={"Email"} placeholder={"adalovelace@email.com"} />
      <Input label={"Senha"} placeholder={"*******"} />
      <Button styles={{ marginTop: 20 }}>
        <AntDesign name="check" size={24} color="white" />
        <SmallText
          textStyles={{
            color: "white",
            fontWeight: "bold",
            marginHorizontal: 4,
          }}
        >
          Entrar
        </SmallText>
      </Button>
      <Button styles={{ marginTop: 20, backgroundColor: "white" }}>
        <SmallText textStyles={{ fontWeight: "bold" }}>Cadastrar</SmallText>
      </Button>
    </HomeContainer>
  );
};

export default Login;
