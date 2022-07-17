import React, { useEffect } from 'react'
import { filteredProducts, selectProduct } from '../../store/actions/index'
import { useDispatch, useSelector } from 'react-redux'

import { Products } from '../../components/index'
import { View } from 'react-native'
import { styles } from './styles'

const ProductsScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector(state => state.category.selected)
    const categoryProducts = useSelector(state => state.products.filteredProducts)
    const productSelected = useSelector(state => state.products.selected)

    useEffect(() => {
        dispatch(filteredProducts(selectedCategory.id))
    }, [])

    const onHandlerSelectedProduct = (item) => {
        dispatch(selectProduct(item.id))
        navigation.navigate('ProductDetail', { 
            name: item.title
         })
    }

    console.log('selectedCategory', selectedCategory)
    return (
        <View style={styles.container}>
            <Products
                data={categoryProducts}
                onSelected={onHandlerSelectedProduct}
            />
        </View>
    )
}

export default ProductsScreen