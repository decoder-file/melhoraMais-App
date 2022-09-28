import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { ScrollView } from "react-native";
import { showMessage } from "react-native-flash-message";

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
import api from "../../services/api";

const RegisterCalculationSchema = Yup.object().shape({
  title: Yup.string().min(4).required("Campo obrigatório"),
  description: Yup.string().min(4).required("Campo obrigatório"),

  entryWeight: Yup.string().required("Campo obrigatório"),
  dailyCost: Yup.string().required("Campo obrigatório"),

  priceAtPurchase: Yup.string().required("Campo obrigatório"),
  gmd: Yup.string().required("Campo obrigatório"),

  timeOfStay: Yup.string().required("Campo  obrigatório"),
  outputWeight: Yup.string().required("Campo obrigatório"),

  rcInitial: Yup.string().required("Campo obrigatório"),
  rcFinal: Yup.string().required("Campo obrigatório"),

  atSalePrice: Yup.string().required("Campo obrigatório"),
  purchasePrice: Yup.string().required("Campo obrigatório"),

  priceAtProduced: Yup.string().required("Campo obrigatório"),
  returnOnCapital: Yup.string().required("Campo obrigatório"),

  result: Yup.string().required("Campo Resultado obrigatório"),
});

export function RegisterCalculation() {
  const navigation = useNavigation();
  const [listTag, setListTag] = useState<any[]>([]);
  const [selectTag, setSelectTag] = useState("");
  const [sliderValue, setSliderValue] = useState(0);

  const handleTag = (id: string) => {
    setSelectTag(id);
  };

  const tagSearch = async () => {
    api
      .get("/tag-calculations")
      .then((response) => {
        setListTag(response.data);
      })
      .catch((err) => {
        showMessage({
          message: "Error!",
          description: "Ocorreu para carregar as tag personalizadas",
          type: "danger",
          icon: "danger",
        });
      });
  };

  const submitCalculations = async (value: object) => {
    api.post("/calculations", value);
  };

  useEffect(() => {
    tagSearch();
  }, []);

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
          const sendValue = { tag: selectTag,
          title: v.title,
          description: v.description,
          bash: "",
          entranceWeight: v.entryWeight,
          dailyCost: v.dailyCost,
          gmd: v.gmd,
          purchasePrice: v.purchasePrice,
          lengthOfStay: v.timeOfStay,
          outputWeight: v.outputWeight,
          rcInitial: v.rcInitial,
          rcEnd: v.rcFinal,
          salePrice: v.atSalePrice,
          producedPrice: v.priceAtProduced,
          returnOnCapital: v.returnOnCapital,
          result: v.result}

          await submitCalculations(sendValue);
          showMessage({
            message: "Sucesso!",
            description: "Cálculo criado com sucesso!",
            type: "success",
            icon: "success",
          });
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
            {listTag &&
              listTag.map((e) => (
                <Tag
                  key={e.id}
                  title={e.title}
                  color={e.color}
                  onPress={() => handleTag(e.id)}
                  id={e.id}
                  selectId={selectTag}
                />
              ))}
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
            onChangeText={handleChange("title")}
            error={errors.title && touched.title && errors.title}
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
            onChangeText={handleChange("description")}
            error={errors.description && touched.description && errors.description}
            value={values.description}
          />

          <ContainerInputSlider>
            <InputSlider
              title="Peso de entrada(Kg)"
              placeholder="Peso de entrada"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("entryWeight")}
              onChangeText={handleChange("entryWeight")}
              error={errors.entryWeight && touched.entryWeight && errors.entryWeight}
              value={values.entryWeight}
            />
            <InputSlider
              title="Custo diario(R$)"
              placeholder="Custo diário"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("dailyCost")}
              onChangeText={handleChange("dailyCost")}
              error={errors.dailyCost && touched.dailyCost && errors.dailyCost}
              value={values.dailyCost}
            />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="Preço @ compra(R$)"
              placeholder="Preço"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("priceAtPurchase")}
              onChangeText={handleChange("priceAtPurchase")}
              error={errors.priceAtPurchase && touched.priceAtPurchase && errors.priceAtPurchase}
              value={values.priceAtPurchase }
            />
            <InputSlider
              title="GMD(g)"
              placeholder="GMD"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("gmd")}
              onChangeText={handleChange("gmd")}
              error={errors.gmd && touched.gmd && errors.gmd}
              value={values.gmd}
            />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="Tempo Permanência(dias)"
              placeholder="Tempo Permanência"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("timeOfStay")}
              onChangeText={handleChange("timeOfStay")}
              error={errors.timeOfStay && touched.timeOfStay && errors.timeOfStay}
              value={values.timeOfStay}
            />
            <InputSlider
              title="Peso de saída(Kg)"
              placeholder="Peso de saída"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("outputWeight")}
              onChangeText={handleChange("outputWeight")}
              error={errors.outputWeight && touched.outputWeight && errors.outputWeight}
              value={values.outputWeight}
            />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="RC inicial(%)"
              placeholder="RC inicial"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("rcInitial")}
              onChangeText={handleChange("rcInitial")}
              error={errors.rcInitial && touched.rcInitial && errors.rcInitial}
              value={values.rcInitial}
            />
            <InputSlider
              title="RC final(%)"
              placeholder="RC final"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("rcFinal")}
              onChangeText={handleChange("rcFinal")}
              error={errors.rcFinal && touched.rcFinal && errors.rcFinal}
              value={values.rcFinal}
            />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="Preço @ de venda(R$)"
              placeholder="Preço @"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("atSalePrice")}
              onChangeText={handleChange("atSalePrice")}
              error={errors.atSalePrice && touched.atSalePrice && errors.atSalePrice}
              value={values.atSalePrice}
            />
            <InputSlider
              title="Valor de compra(R$)"
              placeholder="Valor"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("purchasePrice")}
              onChangeText={handleChange("purchasePrice")}
              error={errors.purchasePrice && touched.purchasePrice && errors.purchasePrice}
              value={values.purchasePrice}
            />
          </ContainerInputSlider>

          <ContainerInputSlider>
            <InputSlider
              title="Preço @ produzida(R$)"
              placeholder="Preço"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("priceAtProduced")}
              onChangeText={handleChange("priceAtProduced")}
              error={errors.priceAtProduced && touched.priceAtProduced && errors.priceAtProduced}
              value={values.priceAtProduced}
              // editable={false}
            />
            <InputSlider
              title="Rendimento do capital(%)"
              placeholder="Rendimento do capital"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="numeric"
              onBlur={handleBlur("returnOnCapital")}
              onChangeText={handleChange("returnOnCapital")}
              error={errors.returnOnCapital && touched.returnOnCapital && errors.returnOnCapital}
              value={values.returnOnCapital}
              // editable={false}
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
            onChangeText={handleChange("result")}
            value={values.result}
            // editable={false}
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
