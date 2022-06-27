import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 2px;
  max-width: 80px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.white};
`;
