import React, { FunctionComponent } from "react";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import image from "../../assets/image/imagem2.png";
import { colors } from "../colors";
import { ScreenWidth } from "../shared";

interface CardProps {
  textStyles?: StyleProp<ViewStyle>;
}

const Container = styled.View`
  width:328px;
  height: 434px;
  padding: 16px;
  border-color: black;
  shadow-color: black;
  shadow-opacity: 0.26;
  shadow-offset: { width: 0, height: 2 };

  border-radius: 10px;
`;
const Image = styled.Image`
  width: 100%;
  height: 70%;
`;

const Card: FunctionComponent<CardProps> = (props) => {
  return (
    <Container>
      <Image source={image} />
      <SmallText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum
        faucibus laoreet.
      </SmallText>
    </Container>
  );
};

export default Card;
