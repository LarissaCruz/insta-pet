import { useFonts } from "expo-font";
import AuthStackNavigator from "./src/navigatior/AuthStackNavigator";
import MainStackNavigator from "./src/navigatior/MainStackNavigator";


export default function App() {
  let [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "Pacifico-Regular": require("./src/assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (false?<AuthStackNavigator />:<MainStackNavigator/>);
}
