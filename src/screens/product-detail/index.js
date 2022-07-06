import {Text, View} from "react-native";

import React from "react";
import { styles } from "./styles";

const ProductDetailScreen = ({navigation, route}) => {
    const product = route.params.product;
    const {id,
        title,
        description,
        weight,
        price
    } =product;
    return (
        <View style= {styles.container}>
          <View style={styles.productDetail}>
            <Text style={styles.title}>title: {title}</Text>
            <Text style={styles.description}>description: {description}</Text>
            <Text>weight: {weight}</Text>
            <Text>price: {price}</Text>
            
        </View>
        </View>
    )
}

export default ProductDetailScreen;