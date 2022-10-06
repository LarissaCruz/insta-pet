import {AuthStackParamList} from "../navigatior/AuthStackNavigator"
import {RootStackParamList} from "../navigatior/TabNavigation"
type AppRootStack =  AuthStackParamList & RootStackParamList

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppRootStack{

        }
    }
}