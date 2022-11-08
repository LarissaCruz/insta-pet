import React, { FunctionComponent } from "react";
import {useNavigation} from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { AntDesign } from "@expo/vector-icons";
import { AlignCenter } from "../../components/shared";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../components/colors";
import SmallText from "../../components/Texts/SmallText";
import BigText from "../../components/Texts/BigText";
import Button from "../../components/Button/Button";
import Input from "../../components/Inputs/Input";
import {HomeContainer, ImageComponent, ContainerSection, Divider, ContainerLabel} from './styles'

import imageWelcome from "../../assets/image/imageWelcome.png";

export interface authUserDataType {
  email: string;
  senha: string;
}

const Login: FunctionComponent = () => {
  const navigation = useNavigation();

  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();

  const onSubmit = async (data: authUserDataType) => {
    console.log('teste')
  };
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
      <Input label={"Email"} placeholder={"adalovelace@email.com"} control={control} errors={errors} name={"email"} />
      <Input label={"Senha"} placeholder={"*******"} control={control} errors={errors} name={"senha"}>
        <MaterialIcons name="visibility" size={24} color={colors.lightPurple} />
      </Input>
      <Button styles={{ marginTop: 20 }} onPress={handleSubmit(onSubmit)}>
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
        <Divider/>
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
