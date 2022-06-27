import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${RFPercentage(2)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;
