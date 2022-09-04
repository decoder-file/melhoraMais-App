import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${RFPercentage(3)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerInput = styled.View``;

export const Separator = styled.View`
  margin-bottom: 20px;
`;
