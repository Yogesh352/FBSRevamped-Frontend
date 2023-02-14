import { useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

// array of days
const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
// array of months
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

// generate 2 mocked bookings
const dates = [];
for (var i = 0; i < 2; i++) {
  dates.push(randomDate(new Date(2020), new Date()));
}
// generate random date
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
// format date to 12 hour format
function formatDate(hours) {
  if (hours > 11 && hours < 24) {
    return hours % 12 == 0 ? "12pm" : (hours % 12) + "pm";
  } else {
    return hours % 12 == 0 ? "12am" : (hours % 12) + "am";
  }
}

function IconToShow(props) {
  const [confirmed, setConfirmed] = useState(false);


  if (props.type === "Booking"){
    return(
      <TouchableOpacity>
        <Ionic
          name="location"
          size={40}
          color="#657384"
          style={styles.checkInButton}
        />
      </TouchableOpacity>
    )
  } else if (!confirmed) {
    return (
      <TouchableOpacity onPress={() => setConfirmed(!confirmed)}>
        <Ionic
          name="checkmark"
          size={40}
          color="#657384"
          style={styles.checkInButton}
        />
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity>
        <Ionic
          name="checkmark-done"
          size={40}
          color="#657384"
          style={styles.checkInButton}
        />
      </TouchableOpacity>
    )
  }
}

export default function Booking(props) {
  return (
    <View style={styles.box}>
        <Text style={styles.dayDate}>
            <Text style={styles.boldText}> {days[dates[0].getDay()]} {"\n"} </Text>
            {dates[0].getDate()} {months[dates[0].getMonth()]}
        </Text>
        <Text style={styles.timeVenue}>
          <Text style={styles.boldText}>
            {formatDate(dates[0].getHours())} - {" "}
            {formatDate(dates[1].getHours())} {"\n"}
          </Text>
          SCIS1 Seminar Room 3-1
        </Text>

        <IconToShow type={props.type}/>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#293637",
    flexDirection: "row",
  },
  dayDate: {
    padding: 8,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "medium",
    color: "#e9e8ea",
    width: 80,
    height: 60,
    borderRightWidth: 1,
    backgroundColor: "#4a5a64",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  timeVenue: {
    textAlign: "left",
    marginHorizontal: 12,
    marginVertical: 8,
    fontSize: 16,
    fontWeight: "medium",
    color: "#e9e8ea",
    width: "60%",
  },
  checkInButton: {
    marginTop: 8,
  },
  confirmButton: {
    backgroundColor: "#657384",
    marginLeft: -3,
    height: 60,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 12,
    color: "white"
  }
});
