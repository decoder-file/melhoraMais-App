import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

import { Container, Title, ButtonExit } from "./styles";
import { useAuth } from "../../hooks/auth";

interface headerProps {
  title: string;
}

export function Header({ title }: headerProps) {
  const { signOut } = useAuth();
  return (
    <Container>
      <ButtonExit activeOpacity={0.8} onPress={signOut}>
        <MaterialIcons name="arrow-back-ios" size={24} color="#FFFFFF" />
      </ButtonExit>
      <Title>{title}</Title>
      <View />
    </Container>
  );
}
