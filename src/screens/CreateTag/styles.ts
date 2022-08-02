import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TagProps {
  color: string;
  select: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: ${RFPercentage(2)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerTag = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-top: ${RFValue(28)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const CardTag = styled.TouchableOpacity<TagProps>`
  width: ${RFValue(53)}px;
  height: ${RFValue(28)}px;
  border-radius: 6px;
  background-color: ${({ color }) => (color ? color : "#FFF")};
  margin-right: ${RFValue(5)}px;
  margin-bottom: ${RFValue(10)}px;
  border: 2px solid white;
  border-color: ${({ select }) => (select ? "#000" : "#FFF")};
`;

export const TagSelect = styled.View`
  flex-direction: row;
  flex-direction: row;
  gap: 10%;
`;

export const ButtonSave = styled.View`
  margin-top: 20px;
`;
