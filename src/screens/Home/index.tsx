import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import {HomeContainer} from './styles'
import Card from "../../components/Card/Card";



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
