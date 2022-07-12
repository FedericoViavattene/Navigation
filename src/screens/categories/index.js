import {useDispatch, useSelector} from 'react-redux';

import { Categories } from "../../components/index";
import React from "react";
import { View } from "react-native";
import { selectCategory } from '../../store/actions/index';
import { styles } from "./styles";

const CategoriesScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.categories)
    const categoryProducts = useSelector(state => state.products.filteredProducts)
    
    const onHandlerSelectedCategory = (item) => { 
        dispatch(selectCategory(item.id))
        navigation.navigate ('Products', {
           
            name:  item.title

        })
    }
    console.log (categories)
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