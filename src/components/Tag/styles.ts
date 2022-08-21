import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TagProps {
  select: boolean;
}

export const Container = styled.TouchableOpacity<TagProps>`
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  margin-right: 5px;
  border: 2px solid white;
  border-color: ${({ select }) => (select ? "#000" : "#FFF")};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.white};
`;
