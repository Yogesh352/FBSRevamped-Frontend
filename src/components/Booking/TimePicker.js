import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";

const TimePicker = () => {
  const [firstTime, setFirstTime] = useState(-1);
  const [secondTime, setSecondTime] = useState(-1);

  const [openModal, setOpenModal] = useState(false);

  const [clicks, setClicks] = useState(0);

  function reset() {
    setFirstTime(-1);
    setSecondTime(-1);
    setClicks(0);
  }

  return (
    <>
      <View style={styles.app}>
        <Modal
          transparent={true}
          visible={openModal}
          setModalVisiblity={() => {
            setModalVisible((preState) => (preState = !preState));
          }}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              height: "100%",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <View style={styles.modalStyle}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                }}
              >
                <Text style={styles.modalText}>Confirmation</Text>
                <TouchableHighlight
                  onPress={() => {
                    setOpenModal(false);
                    console.log(openModal);
                  }}
                >
                  <Ionic
                    name="close"
                    size={25}
                    color={"#e9e8ea"}
                    onPress={() => {
                      setOpenModal(false);
                    }}
                  />
                </TouchableHighlight>
              </View>
              <Text style={{ color: "#e9e8ea" }}>
                Booking for
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  seat 14 at LKS Level 2{" "}
                </Text>{" "}
                at the timing{" "}
                <Text style={{ fontWeight: "bold" }}>
                  1600hrs - 1800hrs
                </Text>{" "}
                has been confirmed
              </Text>
            </View>
          </View>
        </Modal>
        {timeSlots.map((item) => (
          <TouchableOpacity
            style={{ width: "30%" }}
            onPress={() => {
              if (!item.booked) {
                if (clicks === 0) {
                  setFirstTime(item.id);
                  setClicks(clicks + 1);
                } else {
                  setSecondTime(item.id);
                }
              }
            }}
          >
            <View
              style={[
                styles.col,
                {
                  backgroundColor: item.booked
                    ? "#4a5a64"
                    : item.id == firstTime ||
                      (item.id >= firstTime && item.id <= secondTime)
                    ? "#94c0db"
                    : "#e9e8ea",
                },
              ]}
              key={item.id}
            >
              <Text style={styles.text}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.gap}></View>
        <TouchableOpacity style={{ width: "25%" }} onPress={reset}>
          <View style={styles.resetButton}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Reset
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "25%" }}
          onPress={() => setOpenModal(true)}
        >
          <View style={styles.submitButton}>
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Confirm
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const timeSlots = [
  { id: 1, time: "08:00 - 08:30", booked: false },
  { id: 2, time: "08:30 - 09:00", booked: false },
  { id: 3, time: "09:00 - 09:30", booked: false },
  { id: 4, time: "09:30 - 10:00", booked: false },
  { id: 5, time: "10:00 - 10:30", booked: true },
  { id: 6, time: "10:30 - 11:00", booked: false },
  { id: 7, time: "11:00 - 11:30", booked: false },
  { id: 8, time: "11:30 - 12:00", booked: false },
  { id: 9, time: "12:00 - 12:30", booked: true },
  //   { id: 10, time: "12:30 - 13:00", booked: true },
  //   { id: 11, time: "13:00 - 13:30", booked: true },
  //   { id: 12, time: "13:30 - 14:00", booked: false },
  //   { id: 13, time: "14:30 - 15:00", booked: false },
  //   { id: 14, time: "15:30 - 16:00", booked: false },
  //   { id: 15, time: "16:00 - 16:30", booked: false },
  //   { id: 16, time: "16:30 - 17:00", booked: false },
  //   { id: 17, time: "17:00 - 17:30", booked: false },
  //   { id: 18, time: "17:30 - 18:00", booked: true },
  //   { id: 19, time: "18:00 - 18:30", booked: true },
  //   { id: 20, time: "18:30 - 19:00", booked: true },
  //   { id: 21, time: "19:00 - 19:30", booked: true },
];

export default TimePicker;
const Col = ({ children }) => {
  return <View style={styles.col}>{children}</View>;
};

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const styles = StyleSheet.create({
  app: {
    flex: 3, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",

    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  col: {
    // backgroundColor: "#94c0db",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  gap: {
    width: "40%",
  },
  submitButton: {
    backgroundColor: "#94c0db",
    padding: 10,
    textAlign: "center",
    borderRadius: 10,

    marginTop: 10,
    width: "100%",
  },
  resetButton: {
    backgroundColor: "#293637",
    marginTop: 10,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,

    width: "100%",
  },
  modalStyle: {
    alignSelf: "center",
    alignContent: "center",
    width: "65%",
    height: "17%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#293637",
    shadow: {
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 10,
      },
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 20,
  },
  modalText: {
    color: "#e9e8ea",
    fontSize: 20,
  },
});
