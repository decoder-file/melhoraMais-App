import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 45%;
`;

export const ContainerInput = styled.View`
  width: 100%;
  height: 51px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border: 1px;
  border-color: #ebebec;
  flex-direction: row;
  align-items: center;
`;

export const TitleInput = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-right: 5px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 100%;
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

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFPercentage(2)}px;
`;
