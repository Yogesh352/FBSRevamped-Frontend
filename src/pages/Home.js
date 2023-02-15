import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View style={{ padding: 10, flex: 1, backgroundColor: "#1a2222" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Filter")}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Filter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Listings")}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Listings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Bookings")}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Bookings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Map")}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Maps</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("LandingPage")}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Actual Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("FacilityInfo")}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Facility Information Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailedMap")}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Detailed Map</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#94c0db",
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
