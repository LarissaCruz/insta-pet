import React, { FunctionComponent, useState } from "react";
import { Image, ImageSourcePropType, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../colors";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

interface ContainerImageProps {
  styles: StyleProp<ViewStyle>;
  imagem?: ImageSourcePropType;
}

const Container = styled.TouchableOpacity`
  width: 156px;
  height: 156px;
  background: ${colors.secondary};
  justify-content: center;
  border-radius: 8px;
  align-items: center;
`;


const ContainerImage: FunctionComponent<ContainerImageProps> = (props) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result?.cancelled) {
        setImage(result.uri);
      }
    };

  return (
    <>
    {image ? <View>
      <TouchableOpacity style={{ position: 'absolute', right: 0, top: 0, zIndex:2}} onPress={()=>setImage(null)}>
        <AntDesign name="closesquare" size={24} color={colors.red} />
      </TouchableOpacity>
      <Image source={{ uri: image }} style={{ width: 156, height: 156 ,borderColor:colors.secondary,borderWidth:2, borderRadius: 8}} />
    </View>
    :<Container style={props.styles} onPress={pickImage}>
        <AntDesign name="camera" size={24} color="black" />
    </Container>}
    </>
    
  );
};

export default ContainerImage;
