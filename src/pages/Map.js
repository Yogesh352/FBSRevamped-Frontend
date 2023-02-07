import { Button, Image, Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import MockLayout from "../components/Map/MockLayout/MockLayout";

const MapPage = ({ navigation }) => {
  return (
    <LinearGradient style={{ height: "100%" }} colors={["#2349cf", "#B79fe9"]}>
      <View style={{ flex: 1, height: "100%" }}>
        {/* <Text style={styles.titleText}>Section Availability</Text> */}
        <View style={{ height: "70%" }}>
          <MockLayout />
        </View>

        <View style={styles.popup}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <View style={{ width: "70%" }}>
              <Text style={styles.popupTitle}>LKS Library Level 2</Text>
              <View style={styles.iconAndText}>
                <Ionicons
                  name="location-sharp"
                  size={18}
                  color={"grey"}
                  style={{ marginRight: 5, marginBottom: 10 }}
                />
                <Text>Li Ka Shing</Text>
              </View>
              <View style={styles.iconAndText}>
                <Ionicons
                  name="people-sharp"
                  size={18}
                  color={"grey"}
                  style={{ marginRight: 5 }}
                />
                <Text>100/1500</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                width: "30%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={styles.locationImage}
                source={require("../images/LKSImage.jpg")}
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default MapPage;

const styles = StyleSheet.create({
  popup: {
    backgroundColor: "white",
    height: "30%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flex: 1,
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  iconAndText: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  locationImage: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  titleText: {
    fontWeight: "medium",
    fontSize: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    color: "white",
  },
});
