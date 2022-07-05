import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { AntDesign } from "@expo/vector-icons";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Container,
  ContainerInput,
  Separator,
  Title,
  BackButton,
} from "./styles";

export function Registration() {
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "#FCF9F2" }}
      >
        <BackButton activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
        </BackButton>
        <Title>Criar conta</Title>
        <ContainerInput>
          <Input
            title="Nome"
            placeholder="Informe seu nome"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardAppearance="dark"
          />
          <Separator />
          <Input
            title="E-mail"
            placeholder="Informe seu E-mail"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            keyboardAppearance="dark"
          />
          <Separator />
          <Input
            title="Senha"
            secureTextEntry
            placeholder="Informe sua senha"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardAppearance="dark"
            autoCompleteType="password"
          />
          <Separator />
          <Input
            title="Confirme sua senha"
            secureTextEntry
            placeholder="confirme sua senha"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardAppearance="dark"
            autoCompleteType="password"
          />
        </ContainerInput>

        <Button
          title="Criar conta"
          marginTop={30}
          marginBottom={getBottomSpace() + 10}
        />
      </ScrollView>
    </Container>
  );
}
