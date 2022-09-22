import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "./colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;
export const AlignCenter = styled.View`
  margin-top: 32px;
  justify-content: center;
  align-items: center;
`;
export const SpaceBetween = styled.View`
  flex-direction: row;
  margin-top: 32px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
`;

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;
