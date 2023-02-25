import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TimeSelection = (props) => {
  const [isStartTimeVisible, setStartTimeVisibility] = useState(false);
  const showStartTimePicker = () => {
    setStartTimeVisibility(true);
  };
  const hideStartTimePicker = () => {
    setStartTimeVisibility(false);
  };
  const [isEndTimeVisible, setEndTimeVisibility] = useState(false);
  const showEndTimePicker = () => {
    setEndTimeVisibility(true);
  };
  const hideEndTimePicker = () => {
    setEndTimeVisibility(false);
  };

  const handleStartConfirm = (startTime) => {
    props.setStartTimeChange(startTime);
    console.log("A start time has been picked: ", startTime);
    hideStartTimePicker();
  };

  const handleEndConfirm = (endTime) => {
    props.setEndTimeChange(endTime);
    console.log("A end time has been picked: ", endTime);
    hideEndTimePicker();
  };
  return (
    <View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={showStartTimePicker}
              style={styles.timeButton}
              activeOpacity={0.7}
            >
              <Text style={styles.timeText}>SELECT START TIME</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isStartTimeVisible}
              mode="time"
              date={props.defaultTimePicker}
              onConfirm={handleStartConfirm}
              onCancel={hideStartTimePicker}
              timeZoneOffsetInMinutes={0}
              minuteInterval={15}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={showEndTimePicker}
              style={styles.timeButton}
              activeOpacity={0.7}
            >
              <Text style={styles.timeText}>SELECT END TIME</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isEndTimeVisible}
              mode="time"
              date={props.defaultTimePicker}
              onConfirm={handleEndConfirm}
              onCancel={hideEndTimePicker}
              timeZoneOffsetInMinutes={0}
              minuteInterval={15}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.selectedTime}>
              {JSON.stringify(props.startTimeSelected).substring(12, 17)}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.selectedTime}>
              {JSON.stringify(props.endTimeSelected).substring(12, 17)}
            </Text>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeText: {
    textAlign: "center",
    fontWeight: "500",
    color: "black"
  },
  timeButton: {
    width: "80%",
    backgroundColor: "#94c0db",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 5,
  },
  selectedTime: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "500",
    color: "white",
    paddingBottom: 30
  }
});

export default TimeSelection;
