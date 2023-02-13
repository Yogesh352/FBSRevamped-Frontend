import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";

const YesModal = ({ clicked, children }) => {
  const [showSuccessModal, setSuccessModal] = useState(clicked);
  useEffect(() => {
    toggleYesModal();
  }, [clicked]);

  const toggleYesModal = () => {
    if (clicked) {
      setSuccessModal(true);
    } else {
      setSuccessModal(false);
    }
  };
  return (
    <Modal transparent visible={showSuccessModal}>
      <View style={styles.modalBackground}>
        <View style={[styles.modalContainer]}>{children}</View>
      </View>
    </Modal>
  );
};

const SubmitModal = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <View style={[styles.modalContainer]}>{children}</View>
      </View>
    </Modal>
  );
};
const Confirmation = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [clicked, isClicked] = React.useState(false);
  return (
    <View
      style={{
        padding: 10,
        flex: 1,
        justifyContent: "space-evenly",
        backgroundColor: "#1a2222",
      }}
    >
        {/* Yes Modal */}
      <View style={{ flexDirection: "row" }}>
        <YesModal clicked={clicked}>
          <Text style={styles.confirmText}>Booking is Confirmed!</Text>

          <View>
            <TouchableOpacity onPress={() => {isClicked(false);
            navigation.navigate("Booking")}}>
              <Text style={styles.homeButton}>Return to Home</Text>
            </TouchableOpacity>
          </View>
        </YesModal>
      </View>

      {/* Submit Booking Modal */}
      <View style={{ flexDirection: "row" }}>
        <SubmitModal visible={visible}>
          <Text style={styles.submitText}>
            Are you sure you want to submit?
          </Text>

          <View style={{ flexDirection: "row" }}>
            <View style={{ paddingLeft: 30 }}>
              <TouchableOpacity onPress={() => isClicked(true)}>
                <Text style={styles.twoButtons}>Yes</Text>
              </TouchableOpacity>
            </View>

            <View style={{ paddingLeft: 160 }}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={styles.twoButtons}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SubmitModal>
      </View>

      {/* Booking Information */}
      <View style={styles.informationContainer}>
        <Text style={styles.informationText}>Venue: LKS Seat 80</Text>
        <Text style={styles.informationText}>
          Date: 14th Febuary 2023 (Tues)
        </Text>
        <Text style={styles.informationText}>Time: 8.00am to 9.00am</Text>
        <Text style={styles.informationText}>Duration: 1 hour</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.buttonText}>Submit Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#293637",
    borderRadius: 10,
    marginTop: 340,
    marginBottom: 150,
    paddingVertical: 30,
    paddingHorizontal: 10,
    //width: "50%",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  informationText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  informationContainer: {
    paddingTop: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#293637",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  submitText: {
    marginVertical: 30,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  twoButtons: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  confirmText: {
    marginVertical: 30,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  homeButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  }
});
