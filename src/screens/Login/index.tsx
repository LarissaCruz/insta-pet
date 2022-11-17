import React, { FunctionComponent, useContext, useState } from "react";
import {useNavigation} from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../contexts/AuthContext";
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
import { Keyboard, Alert } from "react-native";
import { Loading } from "../../components/Loading";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface authUserDataType {
  email: string;
  senha: string;
}

const Login: FunctionComponent = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [visibilit, setVisibilit] = useState(true);
  const { login } = useContext(AuthContext);
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  const ShowAlert = (title, message, handlerOnPress) =>{
    Alert.alert(title, message, [{ text: "OK", onPress: handlerOnPress }]);
  }

  const onSubmit = async (data: authUserDataType) => {
    try {
      Keyboard.dismiss();
      setLoading(true);
      await login(data.email, data.senha);
    } catch (e) {
      setLoading(false);
      ShowAlert("Erro", e.message);
    }
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
      <Input label={"Senha"} placeholder={"*******"} secureTextEntry={visibilit} control={control} errors={errors} name={"senha"}>
        <TouchableOpacity onPress={()=>setVisibilit(!visibilit)}>
          <MaterialIcons name="visibility" size={24} color={colors.lightPurple} />
        </TouchableOpacity>
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
      <Loading loading={loading} />
    </HomeContainer>
  );
};

export default Login;
