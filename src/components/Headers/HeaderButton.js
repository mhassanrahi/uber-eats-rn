import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HeaderButton = (props) => {
    return (
        <TouchableOpacity
            disabled={props.disabled}
            style={[styles.button, props.style]}
            onPress={() => props.onPress(props.title)}
        >
            <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default HeaderButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        borderWidth: 1,
        borderRadius: wp(10),
        width: wp(30),
        height: hp(5),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: wp(1),
    },

    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: hp(2),
    },
});
