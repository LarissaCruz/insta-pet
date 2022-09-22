import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../colors";

interface ButtonProps {
  children?: ReactNode;
  styles?: StyleProp<ViewStyle>;
}
const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  padding: 16px;
  background: ${colors.black};
  color: ${colors.white};
  box-shadow: 2px 2px 4px rgb(30, 30, 30, 0.25);
  border-radius: 8px;
  elevation: 1;
`;

const Button: FunctionComponent<ButtonProps> = (props) => {
  return <Container style={props.styles}>{props.children}</Container>;
};
export default Button;
