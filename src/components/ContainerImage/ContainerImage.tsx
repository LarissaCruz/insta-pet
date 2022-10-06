import React, { FunctionComponent } from "react";
import { ImageSourcePropType, ImageStyle } from "react-native";
import styled from "styled-components/native";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../colors";
import { AntDesign } from "@expo/vector-icons";

interface ContainerImageProps {
  styles: StyleProp<ViewStyle>;
  imagem?: ImageSourcePropType;
}

const Container = styled.View`
  width: 156px;
  height: 156px;
  background: ${colors.secondary};
  justify-content: center;
  border-radius: 8px;
  align-items: center;
`;


const ContainerImage: FunctionComponent<ContainerImageProps> = (props) => {
  return (
    <Container style={props.styles}>
        <AntDesign name="camera" size={24} color="black" />
    </Container>
  );
};

export default ContainerImage;
