import { Button, Text, View, StyleSheet } from "react-native";

const BookingPage = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#1a2222",
        padding: 10,
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={{ color: "white" }}>This is Booking</Text>
    </View>
  );
};

export default BookingPage;
