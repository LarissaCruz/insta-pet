import React, { FunctionComponent, useState,useContext } from "react";
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
import { Alert, Keyboard } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { Loading } from "../../components/Loading";

type AuthScreenProp = StackNavigationProp<AuthStackParamList, 'Login', 'Register'>;

export interface userDataType {
  name:string;
  email: string;
  senha: string;
  confirmaSenha:string;
}

const Register: FunctionComponent = () => {
  const navigation = useNavigation<AuthScreenProp>();
  const [loading, setLoading] = useState(false);
  const { register } = useContext(AuthContext);
  const {setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  
  const ShowAlert = (title, message, handlerOnPress) =>{
    Alert.alert(title, message, [{ text: "OK", onPress: handlerOnPress }]);
  }
  
  const onSubmit = async (data: userDataType) => {
    console.log("")
    try {
      Keyboard.dismiss();
      setLoading(true);
      await register(data.email, data.senha);
      setLoading(false);
      ShowAlert("Sucesso", "Seu cadastro foi realizado com sucesso", () =>
      navigation.navigate("Login")
      );
    } catch (e) {
      setLoading(false);
      console.log("errrrrrrrooooooooooooooo", e);
    }
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
      <Loading loading={loading} />
    </HomeContainer>
  );
};

export default Register;
