import React, { FunctionComponent } from "react";
import { useForm } from 'react-hook-form';

import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from "../../routers/auth.router"
import { StackNavigationProp } from '@react-navigation/stack';

import SmallText from "../../components/Texts/SmallText";
import BigText from "../../components/Texts/BigText";
import ContainerImage from "../../components/ContainerImage/ContainerImage";
import Button from "../../components/Button/Button";
import Input from "../../components/Inputs/Input";

import { colors } from "../../components/colors";
import { AlignCenter } from "../../components/shared";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { HomeContainer } from './styles'


type AuthScreenProp = StackNavigationProp<AuthStackParamList, 'Login', 'Register'>;

export interface userDataType {
  name:string;
  email: string;
  senha: string;
  confirmaSenha:string;
}

const Register: FunctionComponent = () => {
  const navigation = useNavigation<AuthScreenProp>();

  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  
  const onSubmit = (data: userDataType) => {
    console.log(data);
  };
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
      <Input label={"*Nome"} placeholder={"Ada Lovelace"} control={control} errors={errors} name={"nome"} />
     
      <Input label={"*Email"} placeholder={"adalovelace@email.com"} control={control} errors={errors} name={"email"} />
      <Input label={"*Senha"} placeholder={"*******"}  control={control} errors={errors} name={"senha"} >
        <MaterialIcons name="visibility" size={24} color={colors.lightPurple} />
      </Input>
      <Input label={"*Repetir senha"} placeholder={"*******"} control={control} errors={errors} name={"confirmarSenha"}  >
        <MaterialIcons name="visibility" size={24} color={colors.lightPurple} />
      </Input>
      
      <Button styles={{ marginTop: 20 }}  onPress={handleSubmit(onSubmit)}>
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
