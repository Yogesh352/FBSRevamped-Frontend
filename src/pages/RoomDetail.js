import { Button, Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const RoomDetailsPage = ({ navigation }) => {
  return (
    <View>
        <LinearGradient style={{ height: "100%" }} colors={["#2349cf", "#B79fe9"]}>
            <View>
              <Text style={styles.titleText}>
                Group Study Room (GSR) 3-2
              </Text>
            </View>

            <View  style={{marginTop: 10}}>
                <Text style={styles.contentText}>
                  BUILDING:{"\n"}
                  School of Computing and Information Systems 1{"\n"}  {"\n"}
                  CAPACITY: {"\n"} 
                  6 {"\n"} {"\n"}
                  CO-BOOKER: {"\n"}
                  1 {"\n"}{"\n"}
                  STATUS: {"\n"}
                  Available for booking {"\n"}
              </Text>
                
            </View>
        </LinearGradient>
      
    </View>
  );
};


export default RoomDetailsPage;

const styles = StyleSheet.create({
    titleText: {
      fontWeight: "medium",
      fontSize: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      color: "white"
    },

    contentText: {
      fontWeight: "medium",
      fontSize: 15,
      paddingHorizontal: 10,
      paddingVertical: 5,
      color: "white",
      // lineHeight: 25
    },
})