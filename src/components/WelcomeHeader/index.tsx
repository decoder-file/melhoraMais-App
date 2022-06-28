import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  ContainerName,
  Name,
  Welcome,
  ButtonExit,
  TitleExit,
} from "./styles";

export function WelcomeHeader() {
  const navigation = useNavigation();
  return (
    <Container activeOpacity={0.8}>
      <ContainerName>
        <Welcome>Bem-vindo,</Welcome>
        <Name>André Loureiro</Name>
      </ContainerName>

      <ButtonExit onPress={() => navigation.goBack()}>
        <TitleExit>Sair</TitleExit>
      </ButtonExit>
    </Container>
  );
}
