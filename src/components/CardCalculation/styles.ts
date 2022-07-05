import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { ButtonProps } from "./index";

export const Container = styled.View<ButtonProps>`
  width: 100%;
  flex-direction: row;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ContainerDescription = styled.TouchableOpacity`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-top: ${RFPercentage(1)}px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${RFPercentage(1)}px;
`;

export const Localization = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonDelete = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${RFPercentage(3)}px;
  margin-left: 5px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const ContainerLocalization = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFPercentage(1)}px;
`;
