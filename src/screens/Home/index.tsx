import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import {HomeContainer} from './styles'
import Card from "../../components/Card/Card";
import api from "../../services/Api";


const Home: FunctionComponent = () => {
  React.useEffect(() => {
     const requestPost = async () => {
      const response = await api.get("publi");
      //atualiza o response quando muda a variável feed
      console.log(response.data.publis)
     }
     requestPost();
  }, []);
  

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
function requestPost() {
  throw new Error("Function not implemented.");
}

