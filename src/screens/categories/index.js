import {useDispatch, useSelector} from 'react-redux';

import { Categories } from "../../components/index";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const CategoriesScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.categories)
    const categoryProducts = useSelector(state => state.products.filteredProducts)
    
    const onHandlerSelectedCategory = (item) => {
        navigation.navigate ('Products', {
            categoryId: item.id,
            name:  item.title
        })
    }
    
    return (
        <View style= {styles.container}>
            <Categories
                data = {categories}     
                onSelected  = {onHandlerSelectedCategory}
            />
        </View>
    )
}

export default CategoriesScreen;