import React, { useEffect, useState } from "react";

import { showMessage } from "react-native-flash-message";
import { ScrollView, View } from "react-native";
import Modal from "react-native-modal";

import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import axios from "axios";
import moment from "moment";

import { CardCalculation } from "../../components/CardCalculation";
import { WelcomeHeader } from "../../components/WelcomeHeader";

import {
  Container,
  ButtonAddNewCalculation,
  TitleButtonAddNewCalculation,
  ContainerCard,
  TitleContainerCard,
  ContainerTemperature,
  LoadingHourly,
  TextLoadingHourly,
} from "./styles";

import { ModalContent } from "../../components/ModalContent";
import { Temperature } from "../../components/Temperature";

import { useAuth } from "../../hooks/auth";
import api from "../../services/api";

interface CalculationsProps {
  id: string;
  tag: string;
  title: string;
  description: string;
}

export function Dashboard() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [hourly, setHourly] = useState<any[]>([]);
  const [loadingHourly, setLoadingHourly] = useState(false);
  const [calculations, setCalculations] = useState<any[]>([]);

  const weatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/3.0",
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const weatherForecast = async () => {
    setLoadingHourly(true);
    weatherApi
      .get(
        "/onecall?lat=-19.88276022389761&lon=-44.00725642334458&&lang=pt_br&exclude=hourly&units=metric&appid=e60bbbd8743dbd96687926fd211c16f2"
      )
      .then((response) => {
        setHourly(response.data.daily);
        setLoadingHourly(false);
      })
      .catch((err) => {
        showMessage({
          message: "Error!",
          description:
            "Ocorreu um erro inesperado para carregar a previsão do tempo",
          type: "danger",
          icon: "danger",
        });
        setLoadingHourly(false);
      });
  };

  const convertDate = (timestamp: number) => {
    var currentDate = new Date(timestamp * 1000);
    const convertedDate = moment(currentDate).format("DD/MM");
    return convertedDate.toString();
  };

  const lookingSavedCalculations = async () => {
    api
      .get("/calculations")
      .then((response) => {
        console.log(response.data);
        setCalculations(response.data);
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

  useEffect(() => {
    weatherForecast();
    lookingSavedCalculations();
  }, []);

  return (
    <>
      <WelcomeHeader name={user.name} />
      <Container>
        <View>
          <ContainerTemperature>
            {loadingHourly ? (
              <>
                <LoadingHourly size="small" color="#FEC321" />
                <TextLoadingHourly>
                  Carregando Previsão do tempo
                </TextLoadingHourly>
              </>
            ) : (
              hourly &&
              hourly.map((e) => (
                <Temperature
                  key={e.dt}
                  date={convertDate(e.dt)}
                  temp={e.temp.day}
                  icon={e.weather.main}
                />
              ))
            )}
          </ContainerTemperature>
        </View>
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
            {calculations &&
              calculations.map((e) => (
                <CardCalculation
                  deleteCalculation={toggleModal}
                  key={e.id}
                  title={e.title}
                  description={e.description}
                />
              ))}
          </ScrollView>
        </ContainerCard>

        <Modal isVisible={isModalVisible}>
          <ModalContent close={toggleModal} />
        </Modal>
      </Container>
    </>
  );
}
