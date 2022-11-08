import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import TodoProvider from '../context/Auth';


import AppRoutes from '../routers/app.router';
import AuthRoutes from '../routers/auth.router';

function Routes() {
   // const { signed, loading } = useAuth();
   // console.log(signed);

   // if (loading) {
       // return (
           // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
               // <ActivityIndicator size='large' color='#666' />
           // </View>
       // );
    //}
    return ( <TodoProvider><AppRoutes /> </TodoProvider>;
}

export default Routes;