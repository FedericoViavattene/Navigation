import { FlatList } from "react-native";
import ProductItem from "./product-item";
import React from "react";

const Products = ({ data, onSelected}) => {
    
    const renderItem = ({item}) => {
        return(
            <ProductItem item = {item} onSelected = {onSelected}/>
        )
    }
    return (
        <FlatList
            data={data}
            keyExtractor = {(item) => item.id}
            renderItem= {renderItem}
        />
    )
}

export default Products;