import React from "react";

import { Header } from "../../components/Header";
import { InputSlider } from "../../components/InputSlider";
import { Input } from "../../components/Input";
import { ScrollView } from "react-native";
import { Button } from "../../components/Button";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Tag } from "../../components/Tag";

import {
  Container,
  ContainerInputSlider,
  ContainerTag,
  TitleTag,
  ButtonAddTag,
  TitleButtonTag,
} from "./styles";

export function RegisterCalculation() {
  return (
    <>
      <Header />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "#FCF9F2" }}
      >
        <Container>
          <TitleTag>Etiquetas</TitleTag>
          <ContainerTag>
            <Tag />
          </ContainerTag>
          <ButtonAddTag>
            <TitleButtonTag>Criar nova etiqueta</TitleButtonTag>
          </ButtonAddTag>

          <Input title="Título" placeholder="Título" />
          <Input title="Descrição" placeholder="Descrição" marginTop={20} />

          <ContainerInputSlider>
            <InputSlider title="Peso de entrada" />
            <InputSlider title="Custo diario" />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider title="Preço @ compra" />
            <InputSlider title="GMD" />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider title="Tempo Permanência" />
            <InputSlider title="Peso de saída" />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider title="RC inicial" />
            <InputSlider title="RC final" />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider title="Preço @ de venda" />
            <InputSlider title="Valor de compra" />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider title="Preço @ produzida" />
            <InputSlider title="Rendimento do capital" />
          </ContainerInputSlider>

          <Input title="Resultado" placeholder="Resultado" marginTop={20} />

          <Button
            title="Salvar"
            marginTop={30}
            marginBottom={getBottomSpace() + 10}
          />
        </Container>
      </ScrollView>
    </>
  );
}
