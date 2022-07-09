import CartNavigator from "./cart";
import Ionicons from '@expo/vector-icons/Ionicons';
import MainNavigator from "./main";
import React from "react";
import { Text } from "react-native";
import { colors } from "../constants/themes";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const LabelBottomTab = (focused, label) => (
    <Text style={{
        color: focused ? colors.primary : colors.secondary,
        fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular'
    }}>{label}</Text>
)

const TabNavigator = () => {
    return  (
        <BottomTab.Navigator 
            initialRouteName="Shop" 
            screenOptions={{
                headerShown: false,
                
            }}>
            <BottomTab.Screen 
            name = 'Shop' 
            component={MainNavigator}
            options ={{
                tabBarLabel:({focused}) => LabelBottomTab(focused, "Comprar"),
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={focused ? 'home' : 'home-outline' } size = {20} color={focused ? colors.primary : colors.secondary }/>
                )
            }}
            />
            <BottomTab.Screen 
            name = 'Cart' 
            component={CartNavigator}
            options ={{
                tabBarLabel:({focused}) => LabelBottomTab(focused, "Carrito"),
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={focused ? 'cart' : 'cart-outline' } size = {20} color={focused ? colors.primary : colors.secondary }/>
                ),
                
            }}
            />
        </BottomTab.Navigator>
    )

}

export default TabNavigator;