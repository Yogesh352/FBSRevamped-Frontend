import { TouchableOpacity, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function InstantBooking() {
    return (
        <TouchableOpacity>
            <Card>
                <Card.Cover 
                source={require("../../assets/cafe.png")}
                style={styles.findMeSeatButton}
                />
            <Text style={styles.findMeASeatText}> Find Me A Seat </Text>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    findMeSeatButton: {
      color: "white",
      height: 100,
      width: "100%",
      borderRadius: 12
    },
    findMeASeatText: {
      marginTop: -44,
      marginLeft: "56%",
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    }
});