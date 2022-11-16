import React, { FunctionComponent } from "react"

import { FlatList } from "react-native";

import {HomeContainer} from './styles'
import { AlignCenter} from "../../components/shared";
import Card from "../../components/Card/Card";
import SmallText from "../../components/Texts/SmallText";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import { MaterialIcons } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';


const Contact: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <HomeContainer>
      <AlignCenter>
        <Avatar styles={{ width: 80, height: 80, borderRadius: 50 }} />
        <SmallText>Carlos Eduardo França</SmallText>
        <SmallText textStyles={{ fontSize: 12, }}>edu_franca</SmallText>
        <Button styles={{ paddingTop: 8, paddingBottom: 8, marginVertical:15}} onPress={() => navigation.navigate("EditProfile")} >
            <MaterialIcons name="edit" size={14} color="white" />
            <SmallText textStyles={{ marginLeft:5, color: "white", fontSize: 12, }}>
              Editar perfil
            </SmallText>
        </Button>
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
