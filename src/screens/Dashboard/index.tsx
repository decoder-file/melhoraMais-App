import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Button title="Entrar" />
      <Input
        title="E-mail"
        placeholder="Informe seu E-mail"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        keyboardAppearance="dark"
      />
    </Container>
  );
}
