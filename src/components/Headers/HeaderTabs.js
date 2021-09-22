import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import HeaderButton from "./HeaderButton";

const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState("Delivery");

    function toggleActiveTab(tab = "Delivery") {
        setActiveTab(tab);
    }

    return (
        <View style={styles.container}>
            <HeaderButton
                title="Delivery"
                onPress={toggleActiveTab}
                activeTab={activeTab}
            />
            <HeaderButton
                title="Pick Up"
                onPress={toggleActiveTab}
                activeTab={activeTab}
            />
        </View>
    );
};

export default HeaderTabs;

const styles = StyleSheet.create({
    container: {
        height: hp(8),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
