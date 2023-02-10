import { Button, Text, View, StyleSheet,TouchableOpacity, Image, ScrollView, FlatList } from "react-native";


function DateButton({first, second, third}) {
  return(
    <View style={{ flexDirection: "row",  backgroundColor: "#F4F6FB"}}>
      <TouchableOpacity
        
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{first}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{second}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{third}</Text>
      </TouchableOpacity>
      </View>
  )
}

const BookingPage = ({ navigation }) => {
  return (
    
      <View >
      <Text style ={styles.headerText}>LKS Seat 80</Text>
      <Image source={require('../images/LKSImage.jpg')}
      style = {styles.imageStyle}/>
      <Text style ={styles.titleText}>Available Booking Slots</Text>
      <View style = {{marginTop: -20}}>

        <DateButton first = {"8.00AM"} second = {"9.00AM"} third = {"10.00AM"}></DateButton>
        <DateButton first = {"11.00AM"} second = {"12.00PM"} third = {"1.00PM"}></DateButton>
        <DateButton first = {"2.00PM"} second = {"3.00PM"} third = {"4.00PM"}></DateButton>
        <DateButton first = {"5.00PM"} second = {"6.00PM"} third = {"7.00PM"}></DateButton>
        {/* <DateButton first = {"5.00PM"} second = {"6.00PM"} third = {"7.00PM"}></DateButton> */}
      </View>

      <View style={{ padding: 10, flex: 1, backgroundColor: "#F4F6FB" }}>
      <TouchableOpacity
        style={styles.confirmContainer}
      >
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
      </View>
      </View>
      
      
  );
};


export default BookingPage;

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    flex : 1,
    justifyContent: "space-evenly",
    backgroundColor: "#751811",
    borderRadius: 5,
    marginTop : 20,
    marginBottom: 2,
    paddingVertical: 8,
    paddingHorizontal: 10,
    // width: "50%",
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  headerText: {
    fontSize: 30,
    fontWeight : "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    paddingVertical: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight : "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    paddingVertical: 15,
  },
  imageStyle : {
    height : 250,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  confirmContainer: {
    elevation: 8,
    backgroundColor: "#2349c2",
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});