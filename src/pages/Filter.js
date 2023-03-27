import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import moment from "moment";

import Calendar from "../components/Filter/Calendar";
import FacilityTypeDropdown from "../components/Filter/FacilityTypeDropdown";
import LocationDropDown from "../components/Filter/LocationDropdown";
import TimeSelection from "../components/Filter/TimeSelection";

const FilterPage = ({ navigation }) => {
  const reset = () => {
    setStartTimeChange(defaultTimeString);
    setEndTimeChange(defaultTimeString);
    setDateChange(moment());
  };

  const formatTimeByOffset = (dateString, offset) => {
    if (!dateString) return ''
    if (dateString.length === 0) return ''
  
    const year = dateString.slice(0, 4)
    const month = dateString.slice(5, 7)
    const day = dateString.slice(8, 10)
    const hour = dateString.slice(11, 13)
    const minute = dateString.slice(14, 16)
    const second = dateString.slice(17, 19)
    const dateObject = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`)
  
    const currentHours = dateObject.getHours()
    dateObject.setHours(currentHours + offset)
    const newDateString = dateObject
      .toISOString()
      .replace('T', ' ')
      .slice(0, 16)
    
    return `${newDateString}$${dateObject}`
  }

  let nowString = JSON.stringify(new Date());
  let nowArray = nowString.split("T");
  let now = nowArray[0].substring(1, 11) + " " + nowArray[1].substring(0, 8);
  let defaultTime = formatTimeByOffset(now, 8).split('$');
  let defaultTimeString = defaultTime[0].toLocaleString();
  let defaultTimePicker = new Date(defaultTime[1]);

  const [startTimeSelected, setStartTimeChange] = React.useState(defaultTimeString);
  const [endTimeSelected, setEndTimeChange] = React.useState(defaultTimeString);

  var [dateSelected, setDateChange] = React.useState(moment());

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Calendar 
          dateSelected={dateSelected}
          setDateChange={setDateChange}
        />
        <TimeSelection 
          defaultTime={defaultTimeString} 
          startTimeSelected={startTimeSelected} 
          setStartTimeChange={setStartTimeChange}
          endTimeSelected={endTimeSelected}
          setEndTimeChange={setEndTimeChange}
          defaultTimePicker={defaultTimePicker}
        />
        <View style={styles.facilityTypeDropdown}>
          <FacilityTypeDropdown />
        </View>
        <View style={styles.locationDropdown}>
          <LocationDropDown />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}></View>
          <View style={{ flexDirection: "row", flex: 1.5 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={reset}
                style={styles.resetButton}
                activeOpacity={0.7}
              >
                <Text style={styles.buttonText}>RESET</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Listings")}
                style={styles.submitButton}
                activeOpacity={0.7}
              >
                <Text style={[styles.buttonText, {color:"black"}]}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#1a2222",
  },
  container: {
    flex: 1,
    minHeight: "100%",
    minWidth: "100%",
    marginTop: 150,
    paddingHorizontal: 16,
  },
  facilityTypeDropdown: {
    zIndex: 2,
    // alignItems: "center",
    // justifyContent: "center",
  },
  locationDropdown: {
    zIndex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 5,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "500",
    color: "white",
  },
  resetButton: {
    backgroundColor: "#293637",
    width: "70%",
    padding: 10,
    marginHorizontal: 30,
    marginVertical: 50,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "#94c0db",
    width: "70%",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 50,
    borderRadius: 5,
  },
});

export default FilterPage;
