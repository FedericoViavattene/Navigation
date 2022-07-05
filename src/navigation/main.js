import {Categories, ProductDetail, Products} from '../screens/index';

import React from "react";
import { colors } from '../constants/themes/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from '../constants/utils/index';

const Stack = createNativeStackNavigator()

const MainNavigator = () => {

    return (

        <Stack.Navigator 
            initialRouteName ='Categories'
            screenOptions={{
                headerStyle: {
                    backgroundColor: isAndroid ? colors.primary : colors.secondary,
                }
            }}
        >
            <Stack.Screen name= 'Categories' component = {Categories}/>
            <Stack.Screen name= 'Products' component = {Products}/>
            <Stack.Screen name= 'ProductDetail' component = {ProductDetail}/>
        </Stack.Navigator>
    )
}

export default MainNavigator;