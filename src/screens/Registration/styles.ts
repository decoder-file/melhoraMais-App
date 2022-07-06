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

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: 35px;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${RFValue(41)}px;
  height: ${RFValue(41)}px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: ${getBottomSpace() + 10}px;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
`;
