import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { ButtonProps } from "./index";

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
`;
