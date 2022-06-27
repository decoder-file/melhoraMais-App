import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  marginTop?: number;
}

export function Button({ title, marginTop }: ButtonProps) {
  return (
    <Container activeOpacity={0.8} marginTop={marginTop}>
      <Title>{title}</Title>
    </Container>
  );
}
