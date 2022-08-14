import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { ActivityIndicator, ScrollView, Platform } from "react-native";

import { useAuth } from "../../hooks/auth";

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
  ContainerLoading,
} from "./styles";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Campo e-mail obrigatório"),
  password: Yup.string().min(4).required("Campo senha obrigatório"),
});

export function Login() {
  const { signInwithGoogle, signIn, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  console.log(user);

  async function handleSignInwithGoogle() {
    try {
      setIsLoading(true);
      return await signInwithGoogle();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  async function handleSignInwithApple() {
    try {
      setIsLoading(true);
      console.log("Apple");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: { email: "", password: "" },
      onSubmit: async (v) => {
        try {
          console.log(v);
          await signIn(v);
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
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "#FCF9F2" }}
      >
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

          {!isLoading ? (
            <>
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
                {Platform.OS === "ios" && (
                  <SocialNetworkButton
                    nameIcon="apple"
                    onPress={handleSignInwithApple}
                  />
                )}
                <SocialNetworkButton nameIcon="facebook-f" />
                <SocialNetworkButton
                  nameIcon="google"
                  onPress={handleSignInwithGoogle}
                />
              </ContainerSocialNetwork>

              <Option>
                <NewPassword
                  onPress={() => navigation.navigate("Registration")}
                >
                  <NewPasswordText>
                    Não tem uma conta? <Span>Faça seu cadastro</Span>
                  </NewPasswordText>
                </NewPassword>
              </Option>
            </>
          ) : (
            <ContainerLoading>
              <ActivityIndicator color="#FEC321" size="large" />
            </ContainerLoading>
          )}
        </Container>
      </ScrollView>
    </>
  );
}
