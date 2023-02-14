import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";

const BottomSheetContent = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.contentContainer}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View style={{ width: "70%" }}>
          <Text style={styles.popupTitle}>Seat 14</Text>
          <View style={styles.iconAndText}>
            <Ionicons
              name="location-sharp"
              size={18}
              color={"#e9e8ea"}
              style={{ marginRight: 5, marginBottom: 10 }}
            />
            <Text style={{ color: "#e9e8ea" }}>Li Ka Shing</Text>
          </View>
          <View style={styles.iconAndText}>
            <Ionicons
              name="md-pricetag"
              size={18}
              color={"#e9e8ea"}
              style={{ marginRight: 5, marginBottom: 10 }}
            />
            <Text style={{ color: "#e9e8ea" }}>Not Booked</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: "30%",
          }}
        >
          <Image
            style={styles.locationImage}
            source={require("../../../images/LKSImage.jpg")}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigate.navigate("Bookings");
          }}
        >
          <Button style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Book Now</Text>
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    backgroundColor: "#293637",
    height: "100%",
    padding: 20,
  },
  title: {
    color: "#e9e8ea",
    fontSize: 20,
  },
  locationImage: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  iconAndText: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#e9e8ea",
  },
  buttonStyle: {
    backgroundColor: "#94c0db",
    marginTop: 20,
    width: "30%",
    borderRadius: 10,

    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});
