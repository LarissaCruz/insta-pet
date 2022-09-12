import { useFonts } from "expo-font";
import TabNavigation from "./src/navigatiors/TabNavigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "Pacifico-Regular": require("./src/assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <TabNavigation />;
}
