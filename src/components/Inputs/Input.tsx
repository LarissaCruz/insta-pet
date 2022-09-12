import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";

interface InputProps {
  children: ReactNode;
  InputStyles: StyleProp<ViewStyle>;
  multiline: boolean;
}
const Container = styled.TextInput`
  padding: 12px 24px;
  color: ${colors.black};
  border-radius: 8px;
  flex-direction: row;
  aling-items: flex-start;
  background: ${colors.white};
  border: 1px solid #353535;
  border-radius: 8px;
  gap: 10px;
`;

const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <>
      <SmallText>Email</SmallText>
      <Container
        multiline={props.multiline}
        numberOfLines={props.multiline ? 4 : 1}
        placeholder="useless placeholder"
      >
        {props.children}
      </Container>
    </>
  );
};

export default Input;
