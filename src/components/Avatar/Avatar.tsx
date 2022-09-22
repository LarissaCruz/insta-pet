import React, { FunctionComponent } from "react";
import { ImageSourcePropType, ImageStyle } from "react-native";
import styled from "styled-components/native";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../colors";
import avatar from "../../assets/image/avatar.png";

interface AvatarProps {
  styles?: StyleProp<ViewStyle>;
  imagem?: ImageSourcePropType;
}
const Container = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  resize-mode: contain;
  background: ${colors.black};
  margin-right: 10px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  overflow: hidden;
`;

const Avatar: FunctionComponent<AvatarProps> = (props) => {
  return (
    <Container style={props.styles}>
      <Image source={avatar} />
    </Container>
  );
};

export default Avatar;
