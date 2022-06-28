import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Tooltip from "react-native-walkthrough-tooltip";
import Slider from "@react-native-community/slider";

import { TextInputProps } from "react-native";

import {
  Container,
  ContainerInput,
  TitleInput,
  TextInput,
  ContainerTitle,
} from "./styles";
import { TouchableOpacity } from "react-native";

interface InputSliderProps extends TextInputProps {
  title: string;
  tooltip?: string;
}

export function InputSlider({ title, tooltip }: InputSliderProps) {
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
          <TextInput />
        </ContainerInput>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumTrackTintColor="#FF5531"
          maximumTrackTintColor="#C8C8C8"
          thumbTintColor="#FF5531"
        />
      </Container>
    </>
  );
}
