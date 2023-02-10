import { Button, Text, View, StyleSheet, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const data = [
    {
      building: "School of Computing and Information Systems 1",
      capacity: "6",
      cobooker: "1",
      status: "Available for booking for selected slot",
      image: require("../images/LevelLayoutTest.jpg"),
    },
];


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
              {data.map((facility) => {
                return (
                  <View>
                      <View style={styles.textBox}>
                          <Text style={styles.contentText}>BUILDING:</Text>
                          <Text style={styles.contentText}>{facility.building}</Text>
                      </View>
                      
                      <View style={styles.textBox}>
                          <Text style={styles.contentText}>CO-BOOKER:</Text>
                          <Text style={styles.contentText}>{facility.cobooker}</Text>
                      </View>

                      <View style={styles.textBox}>
                          <Text style={styles.contentText}>CAPACITY:</Text>
                          <Text style={styles.contentText}>{facility.capacity}</Text>
                      </View>

                      <View style={styles.textBox}>
                          <Text style={styles.contentText}>STATUS:</Text>
                          <Text style={styles.contentText}>{facility.status}</Text>
                      </View>

                      <View>
                          <Image
                              style={{width:'97%', resizeMode: "contain", alignSelf:'center'}} 
                              source={facility.image}/>
                      </View>
                  </View>

                  
                )
              })}
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
      color: "white",
      // lineHeight: 25
    },

    textBox: {
      paddingVertical: 12
    },
})

