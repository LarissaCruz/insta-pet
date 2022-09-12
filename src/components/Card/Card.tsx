import React, { FunctionComponent } from "react";
import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import image from "../../assets/image/imagem2.png";
import { colors } from "../colors";
interface CardProps {
  textStyles?: StyleProp<TextStyle>;
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
 
  shadow-color: black;
  shadow-opacity: 0.26;
  shadow-offset: { width: 0, height: 2 };
  shadow-radius: 10;
  elevation: 3;
  border-color: ${colors.black};
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
