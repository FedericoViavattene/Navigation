import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes/colors";

export const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 150,
    },
    item: {
        flex: 1,
        borderRadius: 6,
        shadowColor: colors.shadow,
        shadowOpacity: 0.26,
        shadowOffset: {width :  0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 8,

    },
    title:{
        fontFamily:  "Lato-Bold",
    }
})