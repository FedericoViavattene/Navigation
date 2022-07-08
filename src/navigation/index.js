import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigator  from "./tab"

const AppNavigator= () => {
    return(
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
    )
}

export default AppNavigator;