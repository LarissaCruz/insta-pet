import React, { FunctionComponent } from "react"

import { FlatList } from "react-native";

import {HomeContainer} from './styles'
import { AlignCenter} from "../../components/shared";
import Card from "../../components/Card/Card";
import SmallText from "../../components/Texts/SmallText";
import Avatar from "../../components/Avatar/Avatar";



const Contact: FunctionComponent = () => {
  return (
    <HomeContainer>
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
