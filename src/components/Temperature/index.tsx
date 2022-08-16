import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Container, DataText, CurrentTemperature } from "./styles";

export function Temperature() {
  return (
    <Container>
      <DataText>dsfas</DataText>
      <Ionicons name="partly-sunny-outline" size={24} color="black" />
      {/* <Ionicons name="sunny-outline" size={24} color="black" />
      <Ionicons name="rainy-outline" size={24} color="black" /> */}
      <CurrentTemperature>27°C</CurrentTemperature>
    </Container>
  );
}
