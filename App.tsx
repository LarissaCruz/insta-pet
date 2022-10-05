import { useFonts } from "expo-font";
import AuthStackNavigator from "./src/navigatiors/AuthStackNavigator";
import MainStackNavigator from "./src/navigatiors/MainStackNavigator";


export default function App() {
  let [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "Pacifico-Regular": require("./src/assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <AuthStackNavigator />;
}
