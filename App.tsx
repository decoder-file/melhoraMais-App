import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { Dashboard } from "./src/screens/Dashboard";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import theme from "./src/global/theme";
import { Login } from "./src/screens/Login";
import { RegisterCalculation } from "./src/screens/RegisterCalculation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <RegisterCalculation />
    </ThemeProvider>
  );
}
