import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, View } from "react-native";
import moment from "moment";

import { CardCalculation } from "../../components/CardCalculation";
import { WelcomeHeader } from "../../components/WelcomeHeader";

interface CurrentTemperatureProps {
  temp: string;
  weather: [{ main: string }];
  dt: string;
}

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

export function Dashboard() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [hourly, setHourly] = useState<any[]>([]);
  const [loadingHourly, setLoadingHourly] = useState(false);

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

  useEffect(() => {
    weatherForecast();
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
