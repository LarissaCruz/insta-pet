import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";

import { AntDesign } from "@expo/vector-icons";
import Input from "../../components/Inputs/Input";
import SmallText from "../../components/Texts/SmallText";
import Button from "../../components/Button/Button";
import { AlignCenter } from "../../components/shared";
import {PublishContainer, ContainerImage} from './styles'

const Publish: FunctionComponent = () => {
  return (
    <PublishContainer>
      <StatusBar />
      <AlignCenter>
        <ContainerImage>
          <AntDesign name="camera" size={24} color="black" />
        </ContainerImage>
        <SmallText textStyles={{ marginVertical: 8 }}>
          Foto do bichinho
        </SmallText>
      </AlignCenter>
      <Input
        label={"Expresse todo seu amor pelo seu pet:"}
        multiline={true}
        placeholder={"Escreva até 100 caracteres..."}
      />
      <SmallText textStyles={{ marginVertical: 8, marginBottom: 18 }}>
        0 de 100 utilizadas
      </SmallText>

      <Button onPress={function (): void {
        throw new Error("Function not implemented.");
       } }>
        <AntDesign name="check" size={24} color="white" />
        <SmallText textStyles={{ color: "white", marginHorizontal: 4 }}>
          Postar
        </SmallText>
      </Button>
    </PublishContainer>
  );
};

export default Publish;
