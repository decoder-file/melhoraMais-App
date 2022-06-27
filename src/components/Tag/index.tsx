import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
}

export function Tag({ title }: ButtonProps) {
  return (
    <Container activeOpacity={0.8}>
      <Title>MG</Title>
    </Container>
  );
}
