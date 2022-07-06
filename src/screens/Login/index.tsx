import React from "react";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { SocialNetworkButton } from "../../components/SocialNetworkButton";

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

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Campo e-mail obrigatório"),
  password: Yup.string().min(4).required("Campo senha obrigatório"),
});

export function Login() {
  const navigation = useNavigation();

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: { email: "", password: "" },
      onSubmit: async (v) => {
        try {
          navigation.navigate("Dashboard");
        } catch (err: any) {
          showMessage({
            message: "Erro no login",
            description:
              "Ocorreu um erro inesperado. Tente novamente mais tarde!",
            type: "danger",
            icon: "danger",
          });
        }
      },
    });

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
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          error={errors.email}
          touched={touched.email}
          value={values.email}
        />
        <Separator />
        <Input
          title="Senha"
          secureTextEntry
          placeholder="Informe sua senha"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardAppearance="dark"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          onSubmitEditing={() => handleSubmit()}
          value={values.password}
        />
      </ContainerInput>

      <ButtonLogin
        title="Entrar"
        marginTop={30}
        onPress={() => handleSubmit()}
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
        <NewPassword onPress={() => navigation.navigate("Registration")}>
          <NewPasswordText>
            Não tem uma conta? <Span>Faça seu cadastro</Span>
          </NewPasswordText>
        </NewPassword>
      </Option>
    </Container>
  );
}
