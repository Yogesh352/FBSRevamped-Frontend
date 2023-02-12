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
    <View style={styles.container}>
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
                    <Text style={styles.contentText}>CO-BOOKER: {facility.cobooker}</Text>
                </View>

                <View style={styles.textBox}>
                    <Text style={styles.contentText}>CAPACITY: {facility.capacity}</Text>
                </View>

                <View style={styles.textBox}>
                    <Text style={styles.contentText}>STATUS: {facility.status}</Text>
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
    </View>
  );
};


export default RoomDetailsPage;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1a2222',
      height: '100%'
    },
    titleText: {
      fontWeight: "500",
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

