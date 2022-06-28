import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  marginTop?: number;
  marginBottom?: number;
}

export function Button({ title, marginTop, marginBottom }: ButtonProps) {
  return (
    <Container
      activeOpacity={0.8}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Title>{title}</Title>
    </Container>
  );
}
