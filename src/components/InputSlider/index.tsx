import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Tooltip from "react-native-walkthrough-tooltip";
import Slider from "@react-native-community/slider";

import { TextInputProps } from "react-native";

import {
  TextMeasureRight,
  Container,
  ContainerInput,
  TitleInput,
  InputField,
  ContainerTitle,
  MeasureRight,
  MeasureLeft,
  TextMeasureLeft,
  ContainerInputLeft,
} from "./styles";
import { TouchableOpacity } from "react-native";

interface InputSliderProps extends TextInputProps {
  title: string;
  tooltip?: string;
  measure: string;
  position: "right" | "left";
}

export function InputSlider({
  title,
  tooltip,
  measure,
  position,
  ...rest
}: InputSliderProps) {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
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
        {position === "left" ? (
          <ContainerInputLeft>
            <MeasureLeft>
              <TextMeasureLeft>{measure}</TextMeasureLeft>
            </MeasureLeft>
            <InputField
              {...rest}
              onChangeText={(newText) => setSliderValue(newText)}
              defaultValue={Math.floor(sliderValue * 800).toString()}
            />
          </ContainerInputLeft>
        ) : (
          <ContainerInput>
            <InputField
              {...rest}
              onChangeText={(newText) => setSliderValue(newText)}
              defaultValue={Math.floor(sliderValue * 800).toString()}
            />
            <MeasureRight>
              <TextMeasureRight>{measure}</TextMeasureRight>
            </MeasureRight>
          </ContainerInput>
        )}

        <Slider
          style={{ width: "100%", height: 40 }}
          minimumTrackTintColor="#FF5531"
          maximumTrackTintColor="#C8C8C8"
          thumbTintColor="#FF5531"
          minimumValue={0}
          maximumValue={1}
          onValueChange={(value) => setSliderValue(value)}
        />
      </Container>
    </>
  );
}
