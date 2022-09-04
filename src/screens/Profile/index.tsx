import React from "react";

import { ScrollView, StatusBar } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { showMessage } from "react-native-flash-message";

import { useNavigation } from "@react-navigation/native";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import api from "../../services/api";

import { Container, ContainerInput, Separator } from "./styles";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(2).required("Campo nome obrigatório"),
  email: Yup.string()
    .email("Email inválido")
    .required("Campo e-mail obrigatório"),
  password: Yup.string().min(4).required("Campo senha obrigatório"),
  confirmPassword: Yup.string()
    .min(4)
    .required("Campo confirmar senha obrigatório"),
});

export function Profile() {
  const navigation = useNavigation();

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: RegistrationSchema,
      initialValues: { name: "", email: "", password: "", confirmPassword: "" },

      onSubmit: async (v) => {
        if (values.password === values.confirmPassword) {
          try {
            await api.post("/users", v);
            showMessage({
              message: "Cadastro realizado com sucesso!",
              description: "Você já pode realizar o login no aplicativo",
              type: "success",
              icon: "success",
            });
            navigation.goBack();
          } catch (err: any) {
            showMessage({
              message: "Erro no cadastro",
              description:
                "Ocorreu um erro inesperado. Tente novamente mais tarde!",
              type: "danger",
              icon: "danger",
            });
          }
        } else {
          showMessage({
            message: "Erro no cadastro",
            description: "Os campos senhas devem ser iguais!",
            type: "danger",
            icon: "danger",
          });
        }
      },
    });

  return (
    <>
      <Header title="Perfil" />
      <StatusBar backgroundColor="#FF5531" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "#FCF9F2" }}
      >
        <Container>
          <ContainerInput>
            <Input
              title="Nome"
              placeholder="Informe seu nome"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              error={errors.name}
              touched={touched.name}
              value={values.name}
            />
            <Separator />
            <Input
              title="Email "
              placeholder="Informe seu E-mail "
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              keyboardAppearance="dark"
              autoComplete="email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              value={values.email}
            />
            <Separator />
            <Input
              title="Localização"
              placeholder="Informe sua localização"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              error={errors.name}
              touched={touched.name}
              value={values.name}
            />
          </ContainerInput>

          <Button
            title="Salvar"
            marginTop={30}
            marginBottom={getBottomSpace() + 10}
            onPress={() => handleSubmit()}
          />
        </Container>
      </ScrollView>
    </>
  );
}
