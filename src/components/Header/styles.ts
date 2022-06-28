import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  width: 100%;
  /* border-radius: 8px; */
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-top: ${getStatusBarHeight() + RFPercentage(4)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonExit = styled.TouchableOpacity``;
