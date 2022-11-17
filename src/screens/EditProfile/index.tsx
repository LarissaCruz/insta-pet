import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useForm } from 'react-hook-form';
import Input from "../../components/Inputs/Input";
import SmallText from "../../components/Texts/SmallText";
import Button from "../../components/Button/Button";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../components/colors";
import { AlignCenter } from "../../components/shared";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { Container } from './styles'
import ContainerImage from "../../components/ContainerImage/ContainerImage";
import { TouchableOpacity } from "react-native-gesture-handler";

const EditProfile: FunctionComponent = () => {
    const [visibilit, setVisibilit] = useState(true);
   const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  return (
    <Container>
      <StatusBar />
      <AlignCenter>
        <ContainerImage/>
        <SmallText textStyles={{ marginVertical: 8 }}>
            *Foto de Perfil
        </SmallText>
      </AlignCenter>
      <Input
        label={"*Nome"}
        placeholder={"Carlos Eduardo França."}
        control={control} errors={errors} name={"name"} 
      />
      <Input
        secureTextEntry={visibilit}
        label={"*Senha"}
        placeholder={"*******"}
        control={control} errors={errors} name={"password"} 
      >
        <TouchableOpacity onPress={()=>setVisibilit(!visibilit)}>
           <MaterialIcons name="visibility" size={24} color={colors.lightPurple} />
        </TouchableOpacity>
          
      </Input> 
      <Input
        label={"**Repetir senha"}
        secureTextEntry={visibilit}
        placeholder={"*******"}
        control={control} errors={errors} name={"confirmpassword"} 
      >
        <TouchableOpacity onPress={()=>setVisibilit(!visibilit)}>
           <MaterialIcons name="visibility" size={24} color={colors.lightPurple} />
        </TouchableOpacity>
      </Input>
    

      <Button styles={{backgroundColor:colors.gray, marginTop: 20 }} onPress={function (): void {
        throw new Error("Function not implemented.");
       } }>
       <FontAwesome name="save" size={24} color="#fff" />
        <SmallText textStyles={{ color: "white", marginHorizontal: 4 }}>
          Salvar
        </SmallText>
      </Button>
    </Container>
  );
};

export default EditProfile;