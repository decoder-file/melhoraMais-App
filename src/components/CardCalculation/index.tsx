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
  ButtonDelete,
  ContainerLocalization,
} from "./styles";
import { Tag } from "../Tag";

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  marginTop?: number;
  deleteCalculation: () => void;
}

export function CardCalculation({
  title,
  marginTop,
  deleteCalculation,
}: ButtonProps) {
  return (
    <Container marginTop={marginTop}>
      <ContainerDescription activeOpacity={0.8}>
        <Tag />
        <Title>Colonial Agropecuária</Title>
        <Description>Registro feito na fazenda colonial</Description>
        <ContainerLocalization>
          <Entypo name="location-pin" size={20} color="black" />
          <Localization>Janaúba - MG</Localization>
        </ContainerLocalization>
      </ContainerDescription>

      <ButtonDelete activeOpacity={0.8} onPress={deleteCalculation}>
        <FontAwesome name="trash" size={24} color="#F91E1E" />
      </ButtonDelete>
    </Container>
  );
}
