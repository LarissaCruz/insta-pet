import {AuthStackParamList} from "../routers/auth.router"
import {RootStackParamList} from "../routers/TabBar"
type AppRootStack =  AuthStackParamList & RootStackParamList

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppRootStack{

        }
    }
}