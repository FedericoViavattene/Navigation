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
                },
                headerTintColor: isAndroid ? colors.black : colors.white,
                headerTitleStyle: {
                    fontFamily: 'Lato-Bold',
                }
            }}
        >
            <Stack.Screen 
            name= 'Categories' 
            component = {Categories}
            options = {{
                title: "Panaderia"
            }}
            />
            <Stack.Screen 
            name= 'Products' 
            component = {Products}
            options = {({ route }) => ({
                title: route.params.name,
            })}
            />
            <Stack.Screen 
            name= 'ProductDetail' 
            component = {ProductDetail}
            options = {({ route }) =>({
                title: route.params.name,
            })}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;