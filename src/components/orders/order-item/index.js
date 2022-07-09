import {Text, TouchableOpacity, View} from 'react-native';

import React from "react";
import { styles } from "./styles";

const formatDay = (time) =>{
    const date = new Date (time);
    return date.toLocaleDateString();
}

const OrderItem = ({ item, onSelected}) => {
    return(
        <TouchableOpacity style={styles.container} onPress = {() => onSelected(item)}>
            <View style={styles.headerContainer}>
                 <Text style={styles.header}>{formatDay(item.date)}</Text>
      </View>
         <View style={styles.containerDetail}>
             <View style={styles.detail}>
                  <Text style={styles.detailTotal}>Total:{item.total}</Text>
        </View>
      </View>
    </TouchableOpacity>
    );
};

export default OrderItem;