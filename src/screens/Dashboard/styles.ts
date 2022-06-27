import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;
