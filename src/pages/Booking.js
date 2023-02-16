import { Button, Text, View, StyleSheet, Image } from "react-native";
import TimePicker from "../components/Booking/TimePicker";

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
      <Text style={styles.headerTitle}>LKS Level 3 Seat 14</Text>
      <Image
        style={styles.locationImage}
        source={require("../images/LKSImage.jpg")}
      />
      <Text style={styles.titleText}>Timeslots</Text>
      <TimePicker />
    </View>
  );
};

export default BookingPage;

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#94c0db",
    marginVertical: 5,
  },
  locationImage: {
    alignSelf: "center",
    height: 150,
    width: "100%",
    borderRadius: 10,
    marginBottom:5
  },
  headerTitle: {
    color: "#94c0db",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5
  },
});
