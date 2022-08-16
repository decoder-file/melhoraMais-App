import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${RFPercentage(2)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ButtonAddNewCalculation = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const TitleButtonAddNewCalculation = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-left: 5px;
`;

export const ContainerCard = styled.View`
  padding-bottom: 100px;
`;

export const TitleContainerCard = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: 10px;
`;

export const ContainerTemperature = styled.View``;
