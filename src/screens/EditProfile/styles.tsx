import styled from "styled-components/native";

import { colors } from "../../components/colors";


export const Container = styled.ScrollView`
  background-color: ${colors.white};
  width: 100%;
  padding: 0px 14px;
`;
export const ContainerImage = styled.View`
  width: 156px;
  height: 156px;
  background: ${colors.secondary};
  justify-content: center;
  border-radius: 8px;
  align-items: center;
`;
