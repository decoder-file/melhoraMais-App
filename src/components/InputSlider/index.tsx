import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Tooltip from "react-native-walkthrough-tooltip";
import Slider from "@react-native-community/slider";

import { TextInputProps } from "react-native";

import {
  Container,
  ContainerInput,
  TitleInput,
  InputField,
  ContainerTitle,
  ContainerError,
  TextError,
} from "./styles";


interface InputSliderProps extends TextInputProps {
  title: string;
  tooltip?: string;
  error?: React.ReactNode;
  sliderValue?: (d: string) => void;
  isSlide?: boolean;
}

export function InputSlider({
  title,
  tooltip,
  sliderValue,
  error,
  isSlide,
  ...rest
}: InputSliderProps) {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  return (
    <>
      <Container>
        <ContainerTitle>
          <TitleInput>{title}</TitleInput>

          {tooltip && (
            <Tooltip
              isVisible={toolTipVisible}
              content={<TitleInput>{tooltip}</TitleInput>}
              placement="top"
              onClose={() => setToolTipVisible(false)}
            >
              <TouchableOpacity onPress={() => setToolTipVisible(true)}>
                <FontAwesome5 name="info-circle" size={14} color="black" />
              </TouchableOpacity>
            </Tooltip>
          )}
        </ContainerTitle>

        <ContainerInput>
          <InputField
            {...rest}
          />
        </ContainerInput>
        {error ? (
          <ContainerError>
            <TextError>{error}</TextError>
          </ContainerError>
        ) : null}
        {isSlide &&  
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumTrackTintColor="#FF5531"
            maximumTrackTintColor="#C8C8C8"
            thumbTintColor="#FF5531"
            minimumValue={0}
            maximumValue={1}
            onValueChange={sliderValue}
          />
        }
       
      </Container>
    </>
  );
}
