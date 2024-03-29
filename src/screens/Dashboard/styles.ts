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

export const ContainerTemperature = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
`;

export const LoadingHourly = styled.ActivityIndicator``;

export const TextLoadingHourly = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.black};
  margin-left: 10px;
`;

export const NotCalculations = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-top: 40%;
  opacity: 0.5;
`;
