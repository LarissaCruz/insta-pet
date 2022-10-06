import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import SmallText from "../components/Texts/SmallText";
import BigText from "../components/Texts/BigText";
import ContainerImage from "../components/ContainerImage/ContainerImage";
import Button from "../components/Button/Button";
import { AlignCenter } from "../components/shared";
import { MaterialIcons } from "@expo/vector-icons";
import imageWelcome from "../assets/image/imageWelcome.png";
import Input from "../components/Inputs/Input";
import { AntDesign } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from "../navigatior/AuthStackNavigator"
import {StackNavigationProp} from '@react-navigation/stack';

const HomeContainer = styled(Container)`
  background-color: ${colors.white};
  padding: 16px;
`;

const ImageComponent = styled.Image`
  width: 194px;
  heigth: 194px;
  margin-top: 40px;

`;

const ContainerSection = styled.View`
  height: 50px;
  margin-top: 20px;
  justify-content: center; 
  align-items: center; 
`;

const Divider = styled.View`
  background-color:${colors.lightGray}; 
  position: absolute; 
  width: 100%; 
  height: 1px;
`;

const ContainerLabel = styled.View`
  background-color: ${colors.white};
  padding: 16px;
`;

type AuthScreenProp = StackNavigationProp<AuthStackParamList, 'Login', 'Register'>;

const Register: FunctionComponent = () => {
  const navigation = useNavigation<AuthScreenProp>();

  return (
    <HomeContainer>
      <AlignCenter>
        <BigText >Instapet</BigText>
      </AlignCenter>
      <AlignCenter>
        <ContainerImage styles={{backgroundColor:"#AE78EF9f"}}/>
        <SmallText textStyles={{ marginBottom: 10, alignItems:"center"}}>
        *Foto de Perfil
        </SmallText>
      </AlignCenter>
      <Input label={"*Nome"} placeholder={"Ada Lovelace"} />
     
      <Input label={"*Email"} placeholder={"adalovelace@email.com"} />
      <Input label={"*Senha"} placeholder={"*******"} >
        <MaterialIcons name="visibility" size={24} color={colors.lightPurple} />
      </Input>
      <Input label={"*Repetir senha"} placeholder={"*******"} >
        <MaterialIcons name="visibility" size={24} color={colors.lightPurple} />
      </Input>
      
      <Button styles={{ marginTop: 20 }} onPress={() => navigation.navigate("Login")}>
        <AntDesign name="check" size={24} color="white" />
        <SmallText
          textStyles={{
            color: "white",
            fontWeight: "bold",
            marginHorizontal: 4,
          }}
        >
          Cadastrar
        </SmallText>
      </Button>
    </HomeContainer>
  );
};

export default Register;
