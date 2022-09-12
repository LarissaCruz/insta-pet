import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import {
  ImageSourcePropType,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from "react-native";
import { GestureEvent } from "react-native-gesture-handler";

const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 15px;
`;
const StyleImage = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
  return (
    <StyledView onPress={props.onPress}>
      <StyleImage style={props.imgStyle} source={props.img} />
    </StyledView>
  );
};

export default Profile;
