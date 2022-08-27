import React from "react";

import { TouchableOpacityProps } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { Tag } from "../Tag";

import {
  Container,
  Title,
  ContainerDescription,
  Description,
  Localization,
  ButtonDelete,
  ContainerLocalization,
} from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  colorTag?: string;
  title: string;
  description: string;
  marginTop?: number;
  deleteCalculation: () => void;
}

export function CardCalculation({
  colorTag,
  title,
  description,
  marginTop,
  deleteCalculation,
}: ButtonProps) {
  return (
    <Container marginTop={marginTop}>
      <ContainerDescription activeOpacity={0.8}>
        <Tag color={colorTag} />
        <Title>{title}</Title>
        <Description>{description}</Description>
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
