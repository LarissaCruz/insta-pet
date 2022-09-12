import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../colors";

interface ButtonProps {
  children: ReactNode;
  buttonStyles: StyleProp<ViewStyle>;
}
const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding: 12px 24px;
  color: ${colors.black};
  box-shadow: 2px 2px 4px rgb(30, 30, 30, 0.25);
  border-radius: 8px;
`;

const Button: FunctionComponent<ButtonProps> = (props) => {
  return <Container>{props.children}</Container>;
};
