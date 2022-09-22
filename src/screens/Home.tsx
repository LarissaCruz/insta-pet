import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import Card from "../components/Card/Card";
import { FlatList } from "react-native";

const HomeContainer = styled(Container)`
  background-color: ${colors.white};
  width: 100%;
`;
const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar />

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

export default Home;
