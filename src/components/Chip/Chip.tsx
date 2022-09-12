import React, { FunctionComponent } from "react";
import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import image from "../../assets/image/imagem2.png";
import { colors } from "../colors";
import { ScreenWidth } from "../shared";
import Avatar from "../Avatar/Avatar";

interface ChipProps {
  label: string;
  textStyles?: StyleProp<TextStyle>;
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 8px 0px 0px;
  border-radius: 16px
  background: ${colors.primary}
  gap:8px;
  
`;

const Chip: FunctionComponent<ChipProps> = (props) => {
  return (
    <Container>
      <Avatar />
      <SmallText>{props.label}</SmallText>
    </Container>
  );
};

export default Chip;
