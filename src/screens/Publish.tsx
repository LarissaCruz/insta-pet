import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import Input from "../components/Inputs/Input";
import SmallText from "../components/Texts/SmallText";
import Button from "../components/Button/Button";
import { AlignCenter } from "../components/shared";
const PublishContainer = styled(Container)`
  background-color: ${colors.white};
  width: 100%;
  padding: 0px 14px;
`;
const ContainerImage = styled.View`
  width: 156px;
  height: 156px;
  background: ${colors.secondary};
  justify-content: center;
  border-radius: 8px;
  align-items: center;
`;

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

      <Button>
        <AntDesign name="check" size={24} color="white" />
        <SmallText textStyles={{ color: "white", marginHorizontal: 4 }}>
          Postar
        </SmallText>
      </Button>
    </PublishContainer>
  );
};

export default Publish;
