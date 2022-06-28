import React from "react";

import { ScrollView, StatusBar } from "react-native";
import { Button } from "../../components/Button";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {
  Container,
  ContainerTag,
  Title,
  CardTag,
  TagSelect,
  ButtonSave,
} from "./styles";

export function CreateTag() {
  return (
    <>
      <Header title="Personalizar etiqueta " />
      <StatusBar backgroundColor="#FF5531" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "#FCF9F2" }}
      >
        <Container>
          <Input title="Título etiqueta" />

          <ContainerTag>
            <Title>Selecionar uma cor</Title>
            <TagSelect>
              <CardTag color="#F14C4C" />
              <CardTag color="#46A619" />
              <CardTag color="#219EC6" />
              <CardTag color="#D81371" />
              <CardTag color="#A608CE" />
            </TagSelect>

            <TagSelect>
              <CardTag color="#F5AB3A" />
              <CardTag color="#C5A1A1" />
              <CardTag color="#16D84C" />
              <CardTag color="#A608CE" />
              <CardTag color="#48093E" />
            </TagSelect>
          </ContainerTag>

          <ButtonSave>
            <Button title="Salvar" />
          </ButtonSave>
        </Container>
      </ScrollView>
    </>
  );
}
