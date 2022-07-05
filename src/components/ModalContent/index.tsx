import React from "react";

import {
  Container,
  Title,
  Description,
  ButtonConfirm,
  ButtonConfirmText,
  ButtonCancel,
  ButtonCancelText,
  ContainerButton,
  Content,
} from "./styles";

interface headerProps {
  close: () => void;
}

export function ModalContent({ close }: headerProps) {
  return (
    <Container>
      <Content>
        <Title>Atenção</Title>
        <Description>Deseja excluir permanentemente esse cálculo?</Description>

        <ContainerButton>
          <ButtonConfirm>
            <ButtonConfirmText>Confirmar</ButtonConfirmText>
          </ButtonConfirm>

          <ButtonCancel onPress={close}>
            <ButtonCancelText>Cancelar</ButtonCancelText>
          </ButtonCancel>
        </ContainerButton>
      </Content>
    </Container>
  );
}
