import React, { FunctionComponent } from "react";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import image from "../../assets/image/imagem6.png";
import { colors } from "../colors";
import { ScreenWidth } from "../shared";
import Chip from "../Chip/Chip";

interface CardProps {
  textStyles?: StyleProp<ViewStyle>;
}

const Container = styled.View`
  width: 100%;
  border-radius: 16px;
  padding: 16px;
  gap: 8px;
  background: #fff;
  box-shadow: 0px 4px 16px rgba(30, 30, 30, 0.75);
  border-radius: 16px;
  elevation: 9;
  margin-bottom: 16px;
`;
const ContainerChip = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Image = styled.Image`
  width: 100%;
  height: 296px;
  margin-bottom: 10px;
`;

const Card: FunctionComponent<CardProps> = (props) => {
  return (
    <Container>
      <ContainerChip>
        <Chip label={"Larissa"} />
        <SmallText>10/08/2022</SmallText>
      </ContainerChip>

      <Image source={image} />
      <SmallText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum
        faucibus laoreet.
      </SmallText>
    </Container>
  );
};

export default Card;
