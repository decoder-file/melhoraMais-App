import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TextInput } from "react-native";

import { PropsInput } from "./index";

export const Container = styled.View<PropsInput>`
  width: 100%;
  height: 51px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border: 1px;
  border-color: #ebebec;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
`;

export const TitleInput = styled.Text<PropsInput>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${RFPercentage(2)}px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
`;

export const InputField = styled(TextInput)`
  flex: 1;
  font-size: ${RFValue(16)}px;
  padding-left: 16px;
`;

export const TextError = styled.Text`
  color: red;
  font-size: 14px;
`;

export const ContainerError = styled.View`
  margin-bottom: 10px;
`;
