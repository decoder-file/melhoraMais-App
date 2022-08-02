import React, { useState } from "react";

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
  const [tagSelect, setTagselect] = useState("");

  const handleTag = (color: string) => {
    setTagselect(color);
  };

  return (
    <>
      <Header title="Personalizar etiqueta " />
      <StatusBar backgroundColor="#FF5531" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "#FCF9F2" }}
      >
        <Container>
          <Input title="Título etiqueta" placeholder="Título da etiqueta" />

          <ContainerTag>
            <Title>Selecionar uma cor</Title>
            <TagSelect>
              <CardTag
                color="#F14C4C"
                select={tagSelect === "#F14C4C" && true}
                onPress={() => handleTag("#F14C4C")}
              />
              <CardTag
                color="#46A619"
                select={tagSelect === "#46A619" && true}
                onPress={() => handleTag("#46A619")}
              />
              <CardTag
                color="#219EC6"
                select={tagSelect === "#219EC6" && true}
                onPress={() => handleTag("#219EC6")}
              />
              <CardTag
                color="#D81371"
                select={tagSelect === "#D81371" && true}
                onPress={() => handleTag("#D81371")}
              />
              <CardTag
                color="#A608CE"
                select={tagSelect === "#A608CE" && true}
                onPress={() => handleTag("#A608CE")}
              />
            </TagSelect>

            <TagSelect>
              <CardTag
                color="#F5AB3A"
                select={tagSelect === "#F5AB3A" && true}
                onPress={() => handleTag("#F5AB3A")}
              />
              <CardTag
                color="#C5A1A1"
                select={tagSelect === "#C5A1A1" && true}
                onPress={() => handleTag("#C5A1A1")}
              />
              <CardTag
                color="#16D84C"
                select={tagSelect === "#16D84C" && true}
                onPress={() => handleTag("#16D84C")}
              />
              <CardTag
                color="#ffd5a1"
                select={tagSelect === "#ffd5a1" && true}
                onPress={() => handleTag("#ffd5a1")}
              />
              <CardTag
                color="#48093E"
                select={tagSelect === "#48093E" && true}
                onPress={() => handleTag("#48093E")}
              />
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
