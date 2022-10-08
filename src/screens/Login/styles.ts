import styled from "styled-components/native";
import { Button } from "../../components/Button";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: ${RFPercentage(3)}px;
  margin-top: 100px;
`;

export const ContainerInput = styled.View``;

export const Separator = styled.View`
  margin-bottom: 20px;
`;

export const ButtonLogin = styled(Button)`
  width: 100%; 
`;

export const SocialNetworkTab = styled.View`
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: row;
  margin-top: ${RFPercentage(5)}px;
`;

export const TextSocialNetwork = styled.Text`
  font-size: ${RFValue(16)}px;
  margin: 0px 10px;
`;

export const Line = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 1px;
  height: 1px;
  flex: 1px;
`;

export const Option = styled.View`
  margin-top: ${RFPercentage(5)}px;
`;

export const NewPassword = styled.TouchableOpacity`
  width: 100%;
`;

export const NewPasswordText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;

export const Span = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerSocialNetwork = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: ${RFPercentage(5)}px;
`;

export const ContainerLoading = styled.View`
  margin-top: 20px;
  height: 80px;
`;

export const ImgLogo = styled.Image`
  margin-bottom: 30px
`;

export const Content = styled.View``;

export const ContainerButton = styled.View``