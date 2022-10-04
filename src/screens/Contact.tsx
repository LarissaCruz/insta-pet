import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import Card from "../components/Card/Card";
import { FlatList } from "react-native";
import SmallText from "../components/Texts/SmallText";
import Avatar from "../components/Avatar/Avatar";
import Button from "../components/Button/Button";
import { AlignCenter, SpaceBetween } from "../components/shared";
import RegularText from "../components/Texts/RegularText";
import { MaterialIcons } from "@expo/vector-icons";

const HomeContainer = styled(Container)`
  background-color: ${colors.white};
  width: 100%;
`;
const Contact: FunctionComponent = () => {
  return (
    <HomeContainer>
      <SpaceBetween>
        <RegularText textStyles={{ fontSize: 24 }}>Perfil</RegularText>
        <Button styles={{ padding: 8 }}>
          <MaterialIcons name="edit" size={14} color="white" />
          <SmallText textStyles={{ color: "white", fontSize: 12 }}>
            Editar perfil
          </SmallText>
        </Button>
      </SpaceBetween>
      <AlignCenter>
        <Avatar styles={{ width: 80, height: 80, borderRadius: 50 }} />
        <SmallText>Carlos Eduardo França</SmallText>
        <SmallText>edu_franca</SmallText>
      </AlignCenter>
      <FlatList
        data={[
          { title: "Title Text", key: "item1" },
          { title: "Title Text", key: "item1" },
          { title: "Title Text", key: "item1" },
        ]}
        contentContainerStyle={{ padding: 16 }}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {
          return <Card />;
        }}
      />
    </HomeContainer>
  );
};

export default Contact;
