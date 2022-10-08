import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { ScrollView, Text } from "react-native";
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

  entryWeight: Yup.number().required("Campo obrigatório"),
  dailyCost: Yup.number().required("Campo obrigatório"),

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

  const [entryWeight, setEntryWeight] = useState(0);
  const [dailyCost, setDailyCost] = useState(0);
  const [priceAtPurchase, setPriceAtPurchase] = useState(0);
  const [gmd, setGmd] = useState(0)
  const [timeOfStay, setTimeOfStay] = useState(0)
  const [outputWeight, setOutputWeight] = useState(0) 
  const [rcInitial, setRcInitial] = useState(0)
  const [rcFinal, setRcFinal] = useState(0)
  const [atSalePrice, setAtSalePrice] = useState(0)
  const [purchasePrice, setPurchasePrice] = useState(0)
  const [priceAtProduced, setPriceAtProduced] = useState(0)
  const [returnOnCapital, setReturnOnCapital] = useState(0)
  const [result, setResult] = useState(0)

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
  }, [listTag]);

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: RegisterCalculationSchema,
      initialValues: {
        title: "",
        description: "",
        entryWeight: 0,
        dailyCost: 0,
        priceAtPurchase: 0,
        gmd: 0,
        timeOfStay: 0,
        outputWeight: 0,
        rcInitial: 0,
        rcFinal: 0,
        atSalePrice: 0,
        purchasePrice: 0,
        priceAtProduced: 0,
        returnOnCapital: 0,
        result: 0,
      },
      onSubmit: async (v) => {
        try {
          const sendValue = { 
            tag: selectTag,
            title: v.title,
            description: v.description,
            bash: "",
            entranceWeight: entryWeight.toString(),
            dailyCost: dailyCost.toString(),
            gmd: gmd.toString(),
            purchasePrice: purchasePrice.toString(),
            lengthOfStay: timeOfStay.toString(),
            outputWeight: outputWeight.toString(),
            rcInitial: rcInitial.toString(),
            rcEnd: rcFinal.toString(),
            salePrice: atSalePrice.toString(),
            producedPrice: priceAtProduced.toString(),
            returnOnCapital: returnOnCapital.toString(),
            result: result.toString()
          }

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

    const handleChangeOutputWeight = () => {
      setOutputWeight(((gmd*timeOfStay) + entryWeight))
    };

    const handleChangePurchasePrice = () => {
      const calc = (((rcInitial*entryWeight)/100)/15*priceAtPurchase);
      setPurchasePrice(parseFloat(calc.toFixed(2)))
    }

    const handleChangePriceAtProduced = () => {
      const atProduced = (((outputWeight*rcFinal)/100/15) - ((entryWeight*rcInitial)/100)/15);
      const calc = ((dailyCost*timeOfStay) / atProduced)
      
      setPriceAtProduced(parseFloat(calc.toFixed(2)))
      
    }

    const handleChangeReturnOnCapital = () => {
      const calc = (((priceAtProduced - purchasePrice)/purchasePrice)*100)
      setReturnOnCapital(parseFloat(calc.toFixed()))
    }

    const handleChangeResult = () => {
      const calc = (((priceAtProduced - purchasePrice)/purchasePrice)*100)
      setResult(parseFloat(calc.toFixed(2)))
    }

    useEffect(() => {
      handleChangeOutputWeight()
    }, [gmd,timeOfStay, entryWeight]);

    useEffect(() => {
      handleChangePurchasePrice()
    }, [rcInitial,entryWeight, priceAtPurchase]);

    useEffect(() => {
      handleChangePriceAtProduced()
    }, [outputWeight,rcFinal, entryWeight, rcInitial, dailyCost, timeOfStay]);

    useEffect(() => {
      handleChangeReturnOnCapital()
      handleChangeResult()
    }, [priceAtProduced,purchasePrice]);
    
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
                value={entryWeight.toString()}
                sliderValue={value => {
                  setEntryWeight(prev => prev + 1);
                }}
                isSlide
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
              value={dailyCost.toString()}
              sliderValue={value => {
                setDailyCost(prev => prev + 1);
              }}
              isSlide
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
              value={priceAtPurchase.toString()}
              sliderValue={value => {
                setPriceAtPurchase(prev => prev + 1);
              }}
              isSlide
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
              value={gmd.toString()}
              sliderValue={value => {
                setGmd(prev => prev + 1);
              }}
              isSlide
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
              value={timeOfStay.toString()}
              sliderValue={value => {
                setTimeOfStay(prev => prev + 1);
              }}
              isSlide
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
              value={outputWeight.toString()}
              sliderValue={value => {
                setOutputWeight(prev => prev + 1);
              }}
              isSlide
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
              value={rcInitial.toString()}
              sliderValue={value => {
                setRcInitial(prev => prev + 1);
              }}
              isSlide
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
              value={rcFinal.toString()}
              sliderValue={value => {
                setRcFinal(prev => prev + 1);
              }}
              isSlide
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
              value={atSalePrice.toString()}
              sliderValue={value => {
                setAtSalePrice(prev => prev + 1);
              }}
              isSlide
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
              value={purchasePrice.toString()}
              sliderValue={value => {
                setPurchasePrice(prev => prev + 1);
              }}
              isSlide
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
              value={priceAtProduced.toString()}
              editable={false}
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
              value={returnOnCapital.toString()}
              editable={false}
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
            value={result.toString()}
            editable={false}
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
