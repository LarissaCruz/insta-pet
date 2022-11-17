import React, { FunctionComponent } from "react";
import { useForm, Controller } from 'react-hook-form';

import styled from "styled-components/native";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";

interface InputProps {
  children?: ReactNode;
  InputStyles?: StyleProp<ViewStyle>;
  multiline?: boolean;
  secureTextEntry?:boolean;
  label: string;
  placeholder: string;
  control: any;
  errors: any;
  name: string;
}
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;
  color: ${colors.black};
  border-radius: 8px;
  flex-direction: row;
  background: ${colors.white};
  border: 1px solid #353535;
  border-radius: 8px;
  gap: 10px;
 
`;
const ContainerInput = styled.TextInput`
   width:290px;
  
   

`;

const Input: FunctionComponent<InputProps> = ({children,InputStyles,multiline,label,placeholder, control, errors, name, secureTextEntry}) => {
  return (
    <>
      <SmallText textStyles={{ marginVertical: 8 }}>{label}</SmallText>
      <Container >
        <Controller
          control={control}
          render={({field: { onChange, onBlur, value }}) => (
            <ContainerInput
              multiline={multiline}
              secureTextEntry={secureTextEntry}
              numberOfLines={multiline ? 6 : 1}
              placeholder={placeholder}
              onChangeText={(value: string) => onChange(value)}
              value={value}
            />
          )}
          name={name}
          rules={{ required: true }}
        />
        {children}
      </Container>
    </>
  );
};

export default Input;
