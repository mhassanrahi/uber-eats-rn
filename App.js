import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import Home from "./src/screens/Home";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Home />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    },
});
