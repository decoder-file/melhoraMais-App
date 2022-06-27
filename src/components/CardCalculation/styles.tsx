import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { ButtonProps } from "./index";

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
`;

export const ContainerDescription = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px;
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

export const ContainerButton = styled.View`
  width: 17%;
  justify-content: space-around;
  margin-right: 5px;
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: 2px;
  width: 100%;
`;

export const ButtonEdit = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${RFPercentage(2.5)}px 0px;
`;

export const ButtonDelete = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${RFPercentage(2.5)}px 0px;
`;

export const ContainerLocalization = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFPercentage(1)}px;
`;
