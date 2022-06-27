import React from "react";
import { TouchableOpacityProps } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import {
  Container,
  Title,
  ContainerDescription,
  Description,
  Localization,
  ContainerButton,
  ButtonEdit,
  ButtonDelete,
  Separator,
  ContainerLocalization,
} from "./styles";
import { Tag } from "../Tag";

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  marginTop?: number;
}

export function CardCalculation({ title, marginTop }: ButtonProps) {
  return (
    <Container activeOpacity={0.8} marginTop={marginTop}>
      <ContainerDescription>
        <Tag />
        <Title>Colonial Agropecuária</Title>
        <Description>Registro feito na fazenda colonial</Description>
        <ContainerLocalization>
          <Entypo name="location-pin" size={20} color="black" />
          <Localization>Janaúba - MG</Localization>
        </ContainerLocalization>
      </ContainerDescription>

      <ContainerButton>
        <ButtonEdit>
          <FontAwesome name="edit" size={24} color="#FEC321" />
        </ButtonEdit>
        <Separator />
        <ButtonDelete>
          <FontAwesome name="trash" size={24} color="#F91E1E" />
        </ButtonDelete>
      </ContainerButton>
    </Container>
  );
}
