import { TextInput } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 45%;
`;

export const ContainerInput = styled.View`
  width: 80%;
  height: 51px;
  background: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
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

export const InputField = styled(TextInput)`
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
  position: fixed;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  height: 37px;
`;

export const MeasureRight = styled.View`
  height: 51px;
  background: ${({ theme }) => theme.colors.white};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  border-color: #ebebec;
  align-items: center;
  padding: 5px 5px;
`;

export const TextMeasureRight = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  opacity: 0.5;
`;

export const MeasureLeft = styled.View`
  height: 51px;
  background: ${({ theme }) => theme.colors.white};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  border-color: #ebebec;
  align-items: center;
  padding: 5px 5px;
`;

export const TextMeasureLeft = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  opacity: 0.5;
`;

export const ContainerInputLeft = styled.View`
  width: 100%;
  height: 51px;
  background: ${({ theme }) => theme.colors.white};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px;
  border-color: #ebebec;
  flex-direction: row;
  align-items: center;
`;
