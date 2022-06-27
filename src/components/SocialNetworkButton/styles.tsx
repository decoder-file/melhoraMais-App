import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 57px;
  height: 57px;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;
