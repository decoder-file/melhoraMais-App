import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Button } from "../../components/Button";

export const Container = styled.View`
  flex: 1;
  padding: ${RFPercentage(2)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerInputSlider = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TitleTag = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: ${RFValue(10)}px;
`;

export const ContainerTag = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  flex-direction: row;
  margin-bottom: ${RFValue(10)}px;
`;

export const ButtonAddTag = styled.TouchableOpacity`
  margin-bottom: ${RFValue(30)}px;
`;

export const TitleButtonTag = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline ${({ theme }) => theme.colors.primary};
`;
