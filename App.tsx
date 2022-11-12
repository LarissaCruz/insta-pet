import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routers";


export default function App() {
  let [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "Pacifico-Regular": require("./src/assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!!fontsLoaded) {
    return (
      <NavigationContainer>
        <Routes/>
    </NavigationContainer>
    );
   
  }
  return null;
}
