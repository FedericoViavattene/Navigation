import { Products } from "../../components/index";
import React from "react";
import {View} from "react-native";
import { products } from "../../constants/data/index";
import { styles } from "./styles";
import {useSelector} from 'react-redux';

const ProductsScreen = ({navigation}) => {
    const filteredProducts = useSelector(state => state.products.filteredProducts)
    const productSelected = useSelector (state => state.products.selected)
    const onHandlerSelectedProduct = (item) => {
        navigation.navigate ('ProductDetail', { 
            product: item,
            name: item.title
        })
    }
    
    return (
        <View style= {styles.container}>
            <Products 
                data={filteredProducts}
                onSelected = {onHandlerSelectedProduct}
            >


            </Products>
        </View>
    )
}

export default ProductsScreen;