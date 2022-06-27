import React from "react";
import { CardCalculation } from "../../components/CardCalculation";
import { WelcomeHeader } from "../../components/WelcomeHeader";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  ButtonAddNewCalculation,
  TitleButtonAddNewCalculation,
  ContainerCard,
  TitleContainerCard,
} from "./styles";
import { ScrollView } from "react-native";

export function Dashboard() {
  return (
    <>
      <WelcomeHeader />
      <Container>
        <ButtonAddNewCalculation>
          <Ionicons name="add-circle-sharp" size={24} color="black" />
          <TitleButtonAddNewCalculation>
            Realizar novo cálculo
          </TitleButtonAddNewCalculation>
        </ButtonAddNewCalculation>

        <ContainerCard>
          <TitleContainerCard>Cálculos salvos</TitleContainerCard>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <CardCalculation />
            <CardCalculation />
            <CardCalculation />
            <CardCalculation />
            <CardCalculation />
            <CardCalculation />
            <CardCalculation />
          </ScrollView>
        </ContainerCard>
      </Container>
    </>
  );
}
