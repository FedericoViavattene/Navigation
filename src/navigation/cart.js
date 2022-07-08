import {Cart} from '../screens/index';
import React from "react";
import { colors } from '../constants/themes/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from '../constants/utils/index';

const Stack = createNativeStackNavigator()

const CartNavigator = () => {

    return (

        <Stack.Navigator 
            initialRouteName ='Cart'
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
            name= 'Cart' 
            component = {Cart}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;