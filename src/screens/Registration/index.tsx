import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { AntDesign } from "@expo/vector-icons";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Container,
  ContainerInput,
  Separator,
  Title,
  BackButton,
} from "./styles";

const LoginSchema = Yup.object().shape({
  name: Yup.string().min(2).required("Campo nome obrigatório"),
  email: Yup.string()
    .email("Email inválido")
    .required("Campo e-mail obrigatório"),
  password: Yup.string().min(4).required("Campo senha obrigatório"),
});

export function Registration() {
  const navigation = useNavigation();
  const [titleMessage, setTitleMessage] = useState("error");

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: { name: "", email: "", password: "" },
      onSubmit: async (v) => {
        try {
          // await doLogin(v.email, v.password);
          navigation.navigate("Dashboard");
        } catch (err: any) {
          setTitleMessage(err.message);
        }
      },
    });

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor: "#FCF9F2" }}
    >
      <Container>
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
            autoCompleteType="email"
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
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            onSubmitEditing={() => handleSubmit()}
            value={values.password}
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
          onPress={handleSubmit}
        />
      </Container>
    </ScrollView>
  );
}
