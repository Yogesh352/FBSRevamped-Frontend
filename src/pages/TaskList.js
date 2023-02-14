import { View, StyleSheet, Text } from "react-native";
import Booking from "../components/Homepage/BookingComponent.js"

const TaskList = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.titleText}> Pending Confirmations </Text>
            <Booking type="Task"/>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#1a2222",
        height: "100%",
        padding: 16
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#94c0db",
        marginVertical: 5,
    },
})

export default TaskList;