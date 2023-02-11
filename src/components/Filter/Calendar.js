import { StyleSheet } from "react-native";
import React, { useState } from "react";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";

const Calendar = () => {
  let datesWhitelist = [
    {
      start: moment(),
      end: moment().add(14, "days"), // total 14 days included
    },
  ];
  const [dateSelected, setDateChange] = React.useState("");
  const handleDateChange = (date) => {
    setDateChange(date);
    console.log(dateSelected);
  };

  return (
    <CalendarStrip
        scrollable
        style={styles.content}
        calendarColor={"#293637"}
        calendarHeaderStyle={{ color: "white" }}
        dateNumberStyle={{ color: "white" }}
        dateNameStyle={{ color: "white" }}
        disabledDateNameStyle={{ color: "#D3D3D3" }}
        disabledDateNumberStyle={{ color: "#D3D3D3" }}
        iconLeft={require("../../assets/left-arrow.jpg")}
        iconRight={require("../../assets/right-arrow.jpg")}
        iconContainer={{ flex: 0.05 }}
        datesWhitelist={datesWhitelist}
        onDateSelected={handleDateChange}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    height: 100,
    paddingTop: 20, 
    paddingBottom: 10,
    marginTop: -80
  }
});

export default Calendar;
