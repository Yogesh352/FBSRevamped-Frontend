import { Button, Image, Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import MockLayout from "../components/Map/MockLayout/MockLayout";
import Swiper from "react-native-swiper";

const MapPage = ({ navigation }) => {
  return (
    // <LinearGradient style={{ height: "100%" }} colors={["#2349cf", "#B79fe9"]}>
    <View style={styles.content}>
      <View
        style={{
          width: "50%",

          height: "10%",
          alignSelf: "center",
        }}
      >
        <Swiper
          style={styles.wrapper}
          showsButtons
          showsPagination={false}
          // nextButton={<Text style={styles.buttonText}>›</Text>}
          nextButton={<Text style={{ color: "#e9e8ea", fontSize: 45 }}>›</Text>}
          prevButton={<Text style={{ color: "#e9e8ea", fontSize: 45 }}>‹</Text>}
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Level 3</Text>
          </View>
          <View style={styles.slide1}>
            <Text style={styles.text}>Level 2</Text>
          </View>
        </Swiper>
      </View>
      {/* <Text style={styles.titleText}>Section Availability</Text> */}
      <View style={{ height: "60%", paddingHorizontal: 20 }}>
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
            <Text style={styles.popupTitle}>LKS Library Level 3</Text>
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
                name="people-sharp"
                size={18}
                color={"#e9e8ea"}
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "#e9e8ea" }}>100/1500</Text>
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
    // </LinearGradient>
  );
};

export default MapPage;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#1a2222",
    height: "100%",
    flex: 1,
  },
  popup: {
    backgroundColor: "#293637",
    height: "40%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flex: 1,
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#e9e8ea",
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

  slide1: {
    marginTop: -5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "medium",
    fontSize: 20,
    paddingTop: 20,
    color: "white",
  },
  buttonText: {
    color: "red",
    textDecorationColor: "red",
    fontSize: 100,
    fontWeight: "bold",
  },
  wrapper: {
    height: "100%",
  },
});
