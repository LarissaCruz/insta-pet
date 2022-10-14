import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import SmallText from "../components/Texts/SmallText";
import BigText from "../components/Texts/BigText";
import Button from "../components/Button/Button";
import { AlignCenter } from "../components/shared";
import { MaterialIcons } from "@expo/vector-icons";
import imageWelcome from "../assets/image/imageWelcome.png";
import Input from "../components/Inputs/Input";
import { AntDesign } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';

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

const Login: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <HomeContainer>
      <AlignCenter>
        <BigText>Instapet</BigText>
        <ImageComponent source={imageWelcome } />
        <SmallText textStyles={{ marginBottom: 10, alignItems:"center"}}>
          A rede social do seu bichinho 
          <MaterialIcons name="pets" size={24} color="black" />
        </SmallText>
       
      </AlignCenter>
      <Input label={"Email"} placeholder={"adalovelace@email.com"} />
      <Input label={"Senha"} placeholder={"*******"} >
        <MaterialIcons name="visibility" size={24} color={colors.lightPurple} />
      </Input>
      <Button styles={{ marginTop: 20 }} onPress={() => navigation.navigate('Home')}>
        <AntDesign name="check" size={24} color="white" />
        <SmallText
          textStyles={{
            color: "white",
            fontWeight: "bold",
            marginHorizontal: 4,
          }}
        >
          Entrar
        </SmallText>
      </Button>
      <ContainerSection>
        <Divider></Divider>
        <ContainerLabel>
          <SmallText>Ou</SmallText>
        </ContainerLabel>
      </ContainerSection>
      <Button styles={{ marginTop: 20, backgroundColor: "white", borderWidth:1, borderColor:" rgba(200, 200, 200, 0.25)"}}  onPress={() => navigation.navigate("Register")}>
        <SmallText textStyles={{ fontWeight: "bold" }}>Cadastrar</SmallText>
      </Button>
    </HomeContainer>
  );
};

export default Login;
