import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { COLORS } from "../../constants";

const HeaderButton = (props) => {
    return (
        <TouchableOpacity
            disabled={props.disabled}
            style={[styles.button(props.activeTab, props.title), props.style]}
            onPress={() => props.onPress(props.title)}
        >
            <Text
                style={[
                    styles.title(props.activeTab, props.title),
                    props.titleStyle,
                ]}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

export default HeaderButton;

const styles = StyleSheet.create({
    button: (activeTab, title) => ({
        backgroundColor:
            activeTab === title ? COLORS.primary : COLORS.secondary,
        borderRadius: wp(10),
        width: wp(30),
        height: hp(4),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: wp(1),
    }),

    title: (activeTab, title) => ({
        color: activeTab === title ? COLORS.secondary : COLORS.primary,
        fontWeight: activeTab === title ? "bold" : "normal",
        fontSize: hp(2),
    }),
});
