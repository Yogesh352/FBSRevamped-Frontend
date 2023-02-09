import { Button, Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const RoomDetailsPage = ({ navigation }) => {
  return (
    <View>
        <LinearGradient style={{ height: "100%" }} colors={["#2349cf", "#B79fe9"]}>
            <Text>This is Booking</Text>
        </LinearGradient>
      
    </View>
  );
};


export default RoomDetailsPage;