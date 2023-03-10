import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function InstantBooking() {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
            <Card>
                <Card.Cover 
                source={require("../../assets/cafe.jpg")}
                style={styles.findMeSeatButton}
                />
            <Text style={styles.findMeASeatText}> Book a Facility </Text>
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
      marginTop: -28,
      marginLeft: "60%",
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    }
});