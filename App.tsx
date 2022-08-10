import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
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
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
      <FlashMessage position="top" />
    </>
  );
}
