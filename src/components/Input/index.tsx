import React from "react";
import { TextInputProps } from "react-native";

import {
  Container,
  TitleInput,
  TextInput,
  ContainerError,
  TextError,
} from "./styles";

interface PropsInput extends TextInputProps {
  title: string;
  error?: string;
  touched?: boolean;
}

export function Input({ title, error, touched, ...rest }: PropsInput) {
  const validationColor = !touched ? "#FFFFFF" : error ? "#FF5A5F" : "#FFFFFF";

  return (
    <>
      <TitleInput>{title}</TitleInput>

      <Container style={{ borderColor: validationColor }}>
        <TextInput {...rest} />
      </Container>
      {error ? (
        <ContainerError>
          <TextError>{error}</TextError>
        </ContainerError>
      ) : null}
    </>
  );
}
