import {Button, Text, View} from "react-native";

import React from "react";
import { styles } from "./styles";

const ProductsScreen = ({navigation, route}) => {
    return (
        <View style= {styles.container}>
            <Text>Products</Text>
            <Button title="Detalles" onPress={() => navigation.navigate('ProductDetail')}></Button>
        </View>
    )
}

export default ProductsScreen;