import {FlatList, Text, View} from 'react-native';

import CartItem from  "../../components/cart/cart-item"
import React from "react";
import { TouchableOpacity } from 'react-native';
import { cart } from '../../constants/data';
import { styles } from "./styles";

const Cart = () => {
    const items = cart;
    const total = 12000;

    const onHandlerDeleteCart = (id) => {
        console.log(id);
    }

    const onHandlerConfirmCart = () =>{
        console.log("confirm");

    }

    const renderItem = ({item}) => <CartItem item={item} onDelete={onHandlerDeleteCart}/>

    return(
        <View style = {styles.container}>
            <View style = {styles.cartList}>
                <FlatList
                    data = {items}
                    renderItem  ={renderItem}
                    keyExtractor={(item) => item.id}    
                />        
            </View>
            <View style= {styles.footer}>
                <TouchableOpacity style = {styles.buttonConfirm} onPress ={() => onHandlerConfirmCart()}>
                    <Text style ={styles.buttonText}>Confirmar</Text>
                    <View style={styles.totalContainer}>
                        <Text style= {styles.totalTitle}>Total</Text>
                        <Text style= {styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart;