import { StyleSheet } from "react-native";
import React, { useState } from "react";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";

const Calendar = (props) => {
  let datesWhitelist = [
    {
      start: moment(),
      end: moment().add(14, "days"), // total 14 days included
    },
  ];

  var selectedDate = [{date: props.dateSelected, lines: [{color: '#94c0db'}]}]
  var handleDateChange = (date) => {
    props.setDateChange(date);
    console.log(props.dateSelected);
  };

  return (
    <CalendarStrip
        style={styles.content}
        calendarColor={"#293637"}
        calendarHeaderStyle={{ color: "white", paddingBottom: 10 }}
        dateNumberStyle={{ color: "white" }}
        dateNameStyle={{ color: "white" }}
        disabledDateNameStyle={{ color: "#D3D3D3" }}
        disabledDateNumberStyle={{ color: "#D3D3D3" }}
        highlightDateNumberStyle={{color: '#ffffff'}}
        highlightDateNameStyle={{color: '#ffffff'}}
        iconLeft={require("../../assets/left-arrow.jpg")}
        iconRight={require("../../assets/right-arrow.jpg")}
        iconContainer={{ flex: 0.05 }}
        datesWhitelist={datesWhitelist}
        onDateSelected={handleDateChange}
        markedDates={selectedDate}
        scrollToOnSetSelectedDate={true}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    height: 110,
    paddingTop: 15,
    paddingBottom: 10,
    marginTop: -80
  },
  selectedDay: {
    backgroundColor: "white"
  }
});

export default Calendar;
