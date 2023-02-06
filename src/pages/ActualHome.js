import React from 'react';
import { StyleSheet } from "react-native";
import { View, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const ActualHome = () => {
    return (
        <View>
            <LinearGradient style={{ height: "100%" }} colors={["#2349cf", "#B79fe9"]}>
                <View style={styles.content}>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        margin: 20,
        borderRadius: 15,
        shadowColor: '#black',
        elevation: 20, 
        height: "85%",
        backgroundColor: "white"
    }
})

export default ActualHome
