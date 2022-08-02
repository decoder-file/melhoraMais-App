import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { ScrollView } from "react-native";

import { Header } from "../../components/Header";
import { InputSlider } from "../../components/InputSlider";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
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
  const navigation = useNavigation();
  return (
    <>
      <Header title="Novo cálculo" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "#FCF9F2" }}
      >
        <Container>
          <TitleTag>Etiquetas</TitleTag>
          <ContainerTag>
            <Tag />
          </ContainerTag>
          <ButtonAddTag onPress={() => navigation.navigate("CreateTag")}>
            <TitleButtonTag>Criar nova etiqueta</TitleButtonTag>
          </ButtonAddTag>

          <Input title="Título" placeholder="Título" />
          <Input title="Descrição" placeholder="Descrição" marginTop={20} />
          <ContainerInputSlider>
            <InputSlider
              title="Peso de entrada"
              placeholder="Peso de entrada"
            />
            <InputSlider title="Custo diario" placeholder="Custo diario" />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider title="Preço @ compra" placeholder="Preço @ compra" />
            <InputSlider title="GMD" placeholder="GMD" />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="Tempo Permanência"
              placeholder="Tempo Permanência"
            />
            <InputSlider title="Peso de saída" placeholder="Peso de saída" />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider title="RC inicial" placeholder="RC inicial" />
            <InputSlider title="RC final" placeholder="RC final" />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="Preço @ de venda"
              placeholder="Preço @ de venda"
            />
            <InputSlider
              title="Valor de compra"
              placeholder="Valor de compra"
            />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="Preço @ produzida"
              placeholder="Preço @ produzida"
            />
            <InputSlider
              title="Rendimento do capital"
              placeholder="Rendimento do capital"
            />
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
