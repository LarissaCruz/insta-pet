import React, { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";

import BigText from "../Texts/BigText";

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyledView>
      <BigText textStyles={props.mainTextStyles}>{props.mainText}</BigText>
    </StyledView>
  );
};

export default Greeting;
