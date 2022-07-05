import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 14px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  background-color: white;
  padding: 8px;
  border-radius: 8px;
`;

export const ButtonConfirmText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonCancel = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 8px;
  border-radius: 8px;
  margin-left: 15px;
  border: 1px #fff solid;
`;

export const ButtonCancelText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
`;
