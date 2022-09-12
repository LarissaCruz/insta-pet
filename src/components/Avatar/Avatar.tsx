import React, { FunctionComponent } from "react";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../colors";
import avatar from "../../assets/image/avatar.png";

interface AvatarProps {
  styles?: StyleProp<ViewStyle>;
  imagem?: ImageSourcePropType;
}
const Container = styled.View`
  width: 125;
  height: 125;
  border-radius: 125;
  resize-mode: "contain";
  background: ${colors.black};
`;

const Image = styled.Image`
  width: 100;
  height: 100;
  border-radius: 100;
  overflow: "hidden";
`;

const Avatar: FunctionComponent<AvatarProps> = (props) => {
  return (
    <Container>
      <Image source={avatar} />
    </Container>
  );
};

export default Avatar;
