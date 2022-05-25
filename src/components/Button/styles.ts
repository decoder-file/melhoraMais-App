import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
