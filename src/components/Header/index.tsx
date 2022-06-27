import React from "react";

import {
  Container,
  ContainerName,
  Name,
  Welcome,
  ButtonExit,
  TitleExit,
} from "./styles";

export function Header() {
  return (
    <Container activeOpacity={0.8}>
      <ContainerName>
        <Welcome>Bem-vindo,</Welcome>
        <Name>André Loureiro</Name>
      </ContainerName>

      <ButtonExit>
        <TitleExit>Sair</TitleExit>
      </ButtonExit>
    </Container>
  );
}
