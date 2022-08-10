import React from "react";
import { TouchableOpacityProps } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Container } from "./styles";

interface SocialNetworkButtonProps extends TouchableOpacityProps {
  nameIcon: string;
}

export function SocialNetworkButton({
  nameIcon,
  ...rest
}: SocialNetworkButtonProps) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <FontAwesome name={nameIcon} size={24} color="black" />
    </Container>
  );
}
