import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

import { CardCalculation } from "../../components/CardCalculation";
import { WelcomeHeader } from "../../components/WelcomeHeader";

import {
  Container,
  ButtonAddNewCalculation,
  TitleButtonAddNewCalculation,
  ContainerCard,
  TitleContainerCard,
} from "./styles";
import { ModalContent } from "../../components/ModalContent";

export function Dashboard() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <WelcomeHeader />
      <Container>
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
