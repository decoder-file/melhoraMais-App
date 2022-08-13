import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { ScrollView } from "react-native";

import { Header } from "../../components/Header";
import { InputSlider } from "../../components/InputSlider";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";

import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Container,
  ContainerInputSlider,
  ContainerTag,
  TitleTag,
  ButtonAddTag,
  TitleButtonTag,
} from "./styles";
import { showMessage } from "react-native-flash-message";

const RegisterCalculationSchema = Yup.object().shape({
  title: Yup.string().min(4).required("Campo título obrigatório"),
  description: Yup.string().min(4).required("Campo Descrição obrigatório"),

  entryWeight: Yup.number().required("Campo Peso de entrada obrigatório"),
  dailyCost: Yup.number().required("Campo Custo diário obrigatório"),

  priceAtPurchase: Yup.number().required("Campo Preço @ compra obrigatório"),
  gmd: Yup.number().required("Campo GMD obrigatório"),

  timeOfStay: Yup.number().required("Campo Tempo Permanência obrigatório"),
  outputWeight: Yup.number().required("Campo Peso de saída obrigatório"),

  rcInitial: Yup.number().required("Campo RC Inicial obrigatório"),
  rcFinal: Yup.number().required("Campo RC Final obrigatório"),

  atSalePrice: Yup.number().required("Campo Preço @ de venda obrigatório"),
  purchasePrice: Yup.number().required("Campo Valor de compraa obrigatório"),

  priceAtProduced: Yup.number().required("Campo Preço @ produzida obrigatório"),
  returnOnCapital: Yup.number().required(
    "Campo Rendimento do capital obrigatório"
  ),

  result: Yup.number().required("Campo Resultado obrigatório"),
});

export function RegisterCalculation() {
  const navigation = useNavigation();

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: RegisterCalculationSchema,
      initialValues: {
        title: "",
        description: "",
        entryWeight: "",
        dailyCost: "",
        priceAtPurchase: "",
        gmd: "",
        timeOfStay: "",
        outputWeight: "",
        rcInitial: "",
        rcFinal: "",
        atSalePrice: "",
        purchasePrice: "",
        priceAtProduced: "",
        returnOnCapital: "",
        result: "",
      },
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
    <>
      <Header title="Novo cálculo" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "#FCF9F2" }}
      >
        <Container>
          <TitleTag>Etiquetas</TitleTag>
          <ContainerTag>
            <Tag />
          </ContainerTag>
          <ButtonAddTag onPress={() => navigation.navigate("CreateTag")}>
            <TitleButtonTag>Criar nova etiqueta</TitleButtonTag>
          </ButtonAddTag>

          <Input
            title="Título"
            placeholder="Título"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardAppearance="dark"
            onBlur={handleBlur("title")}
            error={errors.title}
            touched={touched.title}
            value={values.title}
          />
          <Input
            title="Descrição"
            placeholder="Descrição"
            marginTop={20}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardAppearance="dark"
            onBlur={handleBlur("description")}
            error={errors.description}
            touched={touched.description}
            value={values.description}
          />
          <ContainerInputSlider>
            <InputSlider
              title="Peso de entrada"
              placeholder="Peso de entrada"
              measure="Kg"
              position="right"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("entryWeight")}
              error={errors.entryWeight}
              touched={touched.entryWeight}
              value={values.entryWeight}
            />
            <InputSlider
              title="Custo diario"
              placeholder="Custo diário"
              measure="R$"
              position="left"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("dailyCost")}
              error={errors.dailyCost}
              touched={touched.dailyCost}
              value={values.dailyCost}
            />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="Preço @ compra"
              placeholder="Preço @ compra"
              measure="R$"
              position="left"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("priceAtPurchase")}
              error={errors.priceAtPurchase}
              touched={touched.priceAtPurchase}
              value={values.priceAtPurchase}
            />
            <InputSlider
              title="GMD"
              placeholder="GMD"
              measure="g"
              position="right"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("gmd")}
              error={errors.gmd}
              touched={touched.gmd}
              value={values.gmd}
            />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="Tempo Permanência"
              placeholder="Tempo Permanência"
              measure="dias"
              position="right"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("timeOfStay")}
              error={errors.timeOfStay}
              touched={touched.timeOfStay}
              value={values.timeOfStay}
            />
            <InputSlider
              title="Peso de saída"
              placeholder="Peso de saída"
              measure="Kg"
              position="left"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("outputWeight")}
              error={errors.outputWeight}
              touched={touched.outputWeight}
              value={values.outputWeight}
            />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="RC inicial"
              placeholder="RC inicial"
              measure="%"
              position="right"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("rcInitial")}
              error={errors.rcInitial}
              touched={touched.rcInitial}
              value={values.rcInitial}
            />
            <InputSlider
              title="RC final"
              placeholder="RC final"
              measure="%"
              position="right"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("rcFinal")}
              error={errors.rcFinal}
              touched={touched.rcFinal}
              value={values.rcFinal}
            />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="Preço @ de venda"
              placeholder="Preço @ de venda"
              measure="R$"
              position="left"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("atSalePrice")}
              error={errors.atSalePrice}
              touched={touched.atSalePrice}
              value={values.atSalePrice}
            />
            <InputSlider
              title="Valor de compra"
              placeholder="Valor de compra"
              measure="R$"
              position="left"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("purchasePrice")}
              error={errors.purchasePrice}
              touched={touched.purchasePrice}
              value={values.purchasePrice}
            />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="Preço @ produzida"
              placeholder="Preço @ produzida"
              measure="R$"
              position="left"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("priceAtProduced")}
              error={errors.priceAtProduced}
              touched={touched.priceAtProduced}
              value={values.priceAtProduced}
            />
            <InputSlider
              title="Rendimento do capital"
              placeholder="Rendimento do capital"
              measure="%"
              position="right"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              onBlur={handleBlur("returnOnCapital")}
              error={errors.returnOnCapital}
              touched={touched.returnOnCapital}
              value={values.returnOnCapital}
            />
          </ContainerInputSlider>

          <Input
            title="Resultado"
            placeholder="Resultado"
            marginTop={20}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardAppearance="dark"
            onBlur={handleBlur("result")}
            error={errors.result}
            touched={touched.result}
            value={values.result}
          />

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
