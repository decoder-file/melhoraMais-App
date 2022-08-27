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

interface WelcomeHeaderProps {
  name: string;
}

export function WelcomeHeader({ name }: WelcomeHeaderProps) {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <Container>
      <ContainerName>
        <Welcome>Bem-vindo,</Welcome>
        <Name>{name}</Name>
      </ContainerName>

      <ButtonExit onPress={() => handleSignOut()}>
        <TitleExit>Sair</TitleExit>
      </ButtonExit>
    </Container>
  );
}
