import {Orders} from '../screens/index';
import React from "react";
import { colors } from '../constants/themes/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from '../constants/utils/index';

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {

    return (

        <Stack.Navigator 
            initialRouteName ='Orders'
            screenOptions={{
                headerStyle: {
                    backgroundColor: isAndroid ? colors.primary : colors.secondary,
                },
                headerTintColor: isAndroid ? colors.black : colors.white,
                headerTitleStyle: {
                    fontFamily: 'Lato-Bold',
                }
            }}
        >
            <Stack.Screen 
            name= 'Orders' 
            component = {Orders}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator;