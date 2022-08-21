import React from "react";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  ContainerName,
  Name,
  Welcome,
  ButtonExit,
  TitleExit,
} from "./styles";

export function WelcomeHeader() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <Container>
      <ContainerName>
        <Welcome>Bem-vindo,</Welcome>
        <Name>André Loureiro</Name>
      </ContainerName>

      <ButtonExit onPress={() => handleSignOut()}>
        <TitleExit>Sair</TitleExit>
      </ButtonExit>
    </Container>
  );
}
