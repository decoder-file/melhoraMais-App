import React, { useEffect, useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

import { CardCalculation } from "../../components/CardCalculation";
import { WelcomeHeader } from "../../components/WelcomeHeader";

import weatherApi from "../../services/api";

import {
  Container,
  ButtonAddNewCalculation,
  TitleButtonAddNewCalculation,
  ContainerCard,
  TitleContainerCard,
  ContainerTemperature,
} from "./styles";
import { ModalContent } from "../../components/ModalContent";
import { Temperature } from "../../components/Temperature";

export function Dashboard() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentTemperature, setCurrentTemperature] = useState();
  const [hourly, setHourly] = useState();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const weatherForecast = async () => {
    weatherApi
      .get(
        "/onecall?lat=-19.88276022389761&lon=-44.00725642334458&&lang=pt_br&units=metric&exclude=hourly&appid=e60bbbd8743dbd96687926fd211c16f2"
      )
      .then((response) => {
        console.log(response.data);
        setCurrentTemperature(response.data.current);
        setHourly(response.data.hourly);
      })
      .catch((err) => {
        showMessage({
          message: "Error!",
          description:
            "Ocorreu um erro inesperado para carregar a previsão do tempo",
          type: "danger",
          icon: "danger",
        });
      });
  };

  useEffect(() => {
    weatherForecast();
  }, []);

  return (
    <>
      <WelcomeHeader />
      <Container>
        <ContainerTemperature>
          <Temperature />
        </ContainerTemperature>
        <ButtonAddNewCalculation
          onPress={() => navigation.navigate("RegisterCalculation")}
        >
          <Ionicons name="add-circle-sharp" size={24} color="black" />
          <TitleButtonAddNewCalculation>
            Realizar novo cálculo
          </TitleButtonAddNewCalculation>
        </ButtonAddNewCalculation>

        <ContainerCard>
          <TitleContainerCard>Cálculos salvos</TitleContainerCard>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <CardCalculation deleteCalculation={toggleModal} />
            <CardCalculation deleteCalculation={toggleModal} />
            <CardCalculation deleteCalculation={toggleModal} />
            <CardCalculation deleteCalculation={toggleModal} />
            <CardCalculation deleteCalculation={toggleModal} />
            <CardCalculation deleteCalculation={toggleModal} />
            <CardCalculation deleteCalculation={toggleModal} />
          </ScrollView>
        </ContainerCard>

        <Modal isVisible={isModalVisible}>
          <ModalContent close={toggleModal} />
        </Modal>
      </Container>
    </>
  );
}
