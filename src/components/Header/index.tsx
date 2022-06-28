import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

import { Container, Title, ButtonExit, TitleExit } from "./styles";
import { View } from "react-native";

interface headerProps {
  title: string;
}

export function Header({ title }: headerProps) {
  return (
    <Container>
      <ButtonExit activeOpacity={0.8}>
        <MaterialIcons name="arrow-back-ios" size={24} color="#FFFFFF" />
      </ButtonExit>
      <Title>{title}</Title>
      <View />
    </Container>
  );
}
