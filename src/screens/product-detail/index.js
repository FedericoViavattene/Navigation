import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { addToCart } from "../../store/actions/index";
import { colors } from "../../constants/themes/index";
import { styles } from "./styles";

const ProductDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);
  const { title, description, weight, price } = product;

  const onHandlerAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.container}>
      <View style={styles.productDetail}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text>{weight}</Text>
        <Text>${price}</Text>
        <Button
          color={colors.primary}
          title="Add to cart"
          onPress={() => onHandlerAddToCart(product)}
        />
      </View>
    </View>
  );
};

export default ProductDetailScreen;