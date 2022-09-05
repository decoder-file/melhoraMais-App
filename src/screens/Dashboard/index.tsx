import React, { useEffect, useState } from "react";

import * as Location from "expo-location";
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
  NotCalculations,
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
  const [locationLat, setLocationLat] = useState(0);
  const [locationLon, setLocationLon] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  console.log("calculations", calculations);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let test = await Location.getCurrentPositionAsync({});
      setLocationLat(test.coords.latitude);
      setLocationLon(test.coords.longitude);
    })();
  }, []);

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
        `/onecall?lat=${locationLat}&lon=${locationLon}&&lang=pt_br&exclude=hourly&units=metric&appid=e60bbbd8743dbd96687926fd211c16f2`
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

  const loadWeatherForecast = () => {
    if (errorMsg.length !== 0) {
      return (
        <TextLoadingHourly>
          A permissão para acessar a localização foi negada
        </TextLoadingHourly>
      );
    } else if (loadingHourly) {
      return (
        <>
          <LoadingHourly size="small" color="#FEC321" />
          <TextLoadingHourly>Carregando Previsão do tempo</TextLoadingHourly>
        </>
      );
    } else if (hourly) {
      return hourly.map((e) => (
        <Temperature
          key={e.dt}
          date={convertDate(e.dt)}
          temp={e.temp.day}
          icon={e.weather.main}
        />
      ));
    } else {
      return "";
    }
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
          <ContainerTemperature>{loadWeatherForecast()}</ContainerTemperature>
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
            {calculations.length > 0 ? (
              calculations.map((e) => (
                <CardCalculation
                  deleteCalculation={toggleModal}
                  key={e.id}
                  title={e.title}
                  description={e.description}
                  tagId={e.tag}
                />
              ))
            ) : (
              <NotCalculations>Não existe cálculos salvos</NotCalculations>
            )}
          </ScrollView>
        </ContainerCard>

        <Modal isVisible={isModalVisible}>
          <ModalContent close={toggleModal} />
        </Modal>
      </Container>
    </>
  );
}
