import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import FlashMessage from "react-native-flash-message";
import { AuthProvider, useAuth } from "./src/hooks/auth";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  
} from "@expo-google-fonts/inter";

import theme from "./src/global/theme";
import { Routes } from "./src/routes";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const { userStorageLoading } = useAuth();

  const loadingAplication = () => {
    if (!fontsLoaded && userStorageLoading) {
      return <ActivityIndicator color="#FEC321" size={20} />;
    } 
    else {
      return <Routes />
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
        {loadingAplication()}
        </AuthProvider>
      </ThemeProvider>
      <FlashMessage position="top" />
    </>
  );
}
