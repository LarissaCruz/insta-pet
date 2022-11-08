import styled from "styled-components/native";

import { colors } from "../../components/colors";
import { Container } from "../../components/shared";


export const HomeContainer = styled(Container)`
background-color: ${colors.white};
padding: 16px;
`;

export const ImageComponent = styled.Image`
width: 194px;
heigth: 194px;
margin-top: 40px;
`;

export const ContainerSection = styled.View`
height: 50px;
margin-top: 20px;
justify-content: center; 
align-items: center; 
`;

export const Divider = styled.View`
background-color:${colors.lightGray}; 
position: absolute; 
width: 100%; 
height: 1px;
`;

export const ContainerLabel = styled.View`
background-color: ${colors.white};
padding: 16px;
`;