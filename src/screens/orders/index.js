import {FlatList, Text, View} from 'react-native';

import OrderItem from '../../components/orders/order-item';
import React from "react";
import { orders } from '../../constants/data';
import { styles } from "./styles";

const Orders = () => {
    const items = orders;

    const onSelectedOrder = (item) => {
        console.log(item);
    }

    const renderItem = ({item}) => <OrderItem item={item} onSelected={onSelectedOrder}/>

    return(
        <View style = {styles.container}>
            <View style = {styles.orderList}>
                <FlatList
                    data = {items}
                    renderItem  ={renderItem}
                    keyExtractor={(item) => item.id}    
                />        
            </View>
        </View>
    )
}

export default Orders;