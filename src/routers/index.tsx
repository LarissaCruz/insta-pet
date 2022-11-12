import React from 'react';
import { View, ActivityIndicator } from 'react-native'

import { useAuth } from "../hooks/useAuth";
import { UserContext } from "../contexts/userContex";
import { AuthContext } from "../contexts/AuthContext";

import AppRoutes from '../routers/app.router';
import AuthRoutes from '../routers/auth.router';

function Routes() {
    const { auth, state } = useAuth();
   // const { signed, loading } = useAuth();
   // console.log(signed);

   // if (loading) {
       // return (
           // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
               // <ActivityIndicator size='large' color='#666' />
           // </View>
       // );
    //}
    function renderScreens() {
        // if (state.loading) {
        // <RootStack.Screen name={'Splash'} component={SplashScreen} />;
        // return null;
        //}
        return state.user ? (
          <UserContext.Provider value={state.user}>
            <AppRoutes />
          </UserContext.Provider>
        ) : (
          <AuthRoutes />
        );
      }
    return ( 
        <AuthContext.Provider value={auth}>
           {renderScreens()} 
        </AuthContext.Provider>
     );
}

export default Routes;