import React from "react";
import { Input } from "../../components/Input";

import {
  Container,
  ButtonLogin,
  ContainerInput,
  Separator,
  SocialNetworkTab,
  TextSocialNetwork,
  Line,
  Option,
  NewPassword,
  NewPasswordText,
  Span,
  ContainerSocialNetwork,
} from "./styles";
import { SocialNetworkButton } from "../../components/SocialNetworkButton";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerInput>
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
      </ContainerInput>

      <ButtonLogin
        title="Entrar"
        marginTop={30}
        onPress={() => navigation.navigate("Dashboard")}
      />

      <SocialNetworkTab>
        <Line />
        <TextSocialNetwork>ou</TextSocialNetwork>
        <Line />
      </SocialNetworkTab>

      <ContainerSocialNetwork>
        <SocialNetworkButton nameIcon="apple" />
        <SocialNetworkButton nameIcon="facebook-f" />
        <SocialNetworkButton nameIcon="google" />
      </ContainerSocialNetwork>

      <Option>
        <NewPassword>
          <NewPasswordText>
            Não tem uma conta? <Span>Faça seu cadastro</Span>
          </NewPasswordText>
        </NewPassword>
      </Option>
    </Container>
  );
}
