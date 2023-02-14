import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Calendar from "../components/Filter/Calendar";
import FacilityTypeDropdown from "../components/Filter/FacilityTypeDropdown";
import LocationDropDown from "../components/Filter/LocationDropdown";
import TimeSelection from "../components/Filter/TimeSelection";

const FilterPage = ({ navigation }) => {
  const reset = () => {
    setStartTimeChange("");
    setEndTimeChange("");
  };

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Calendar />
        <TimeSelection />
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
                <Text style={styles.buttonText}>SUBMIT</Text>
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
    marginTop: "50%",
  },
  facilityTypeDropdown: {
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  locationDropdown: {
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    marginLeft: 30,
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
