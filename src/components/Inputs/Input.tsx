import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";

interface InputProps {
  children?: ReactNode;
  InputStyles?: StyleProp<ViewStyle>;
  multiline?: boolean;
  label: string;
  placeholder: string;
}
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;
  color: ${colors.black};
  border-radius: 8px;
  flex-direction: row;
  background: ${colors.white};
  border: 1px solid #353535;
  border-radius: 8px;
  gap: 10px;
`;
const ContainerInput = styled.TextInput`
  
`;

const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <>
      <SmallText textStyles={{ marginVertical: 8 }}>{props.label}</SmallText>
      <Container >
        <ContainerInput
          multiline={props.multiline}
          numberOfLines={props.multiline ? 6 : 1}
          placeholder={props.placeholder}
        />
        {props.children}
      </Container>
    </>
  );
};

export default Input;
