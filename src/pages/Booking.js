import React, { useState, useEffect } from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const ModalPopup = ({ visible, children }) => {
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

const DateButton = ({ first, second, third }) => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState();
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flexDirection: "row", backgroundColor: "#F4F6FB" }}>
      <ModalPopup visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image
                source={require("../images/x.jpg")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          source = {require("../images/tick.jpg")}
          style = {{ height: 150, width: 150, marginVertical: 10 }}
        </View>
        <Text style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}>
          {" "}
          Button is clicked{" "}
        </Text>
      </ModalPopup>

      <View style={styles.space} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={(first) => {
          // setTime({first});
          setOpen(true);
        }}
      >
        <Text style={styles.buttonText}>{first}</Text>
      </TouchableOpacity>

      {/* <Modal visible={open}>        
          <Text style={styles.modalHeader}>{first} time-slot selected</Text>
          <View style= {styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => setOpen(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>  
          </View>  
      </Modal> */}

      <View style={styles.space} />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{second}</Text>
      </TouchableOpacity>

      <View style={styles.space} />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{third}</Text>
      </TouchableOpacity>
      <View style={styles.space} />
    </View>
  );
};

const BookingPage = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.headerText}>LKS Seat 80</Text>

      <Image
        source={require("../images/LKSImage.jpg")}
        style={styles.imageStyle}
      />
      <Text style={styles.titleText}>Available Booking Slots</Text>
      <View style={{ marginTop: -20 }}>
        <DateButton
          first={"8.00AM"}
          second={"9.00AM"}
          third={"10.00AM"}
        ></DateButton>
        <DateButton
          first={"11.00AM"}
          second={"12.00PM"}
          third={"1.00PM"}
        ></DateButton>
        <DateButton
          first={"2.00PM"}
          second={"3.00PM"}
          third={"4.00PM"}
        ></DateButton>
        <DateButton
          first={"5.00PM"}
          second={"6.00PM"}
          third={"7.00PM"}
        ></DateButton>
      </View>

      <View
        style={{ padding: 10, marginVertical: 30, backgroundColor: "#F4F6FB" }}
      >
        <TouchableOpacity
          style={styles.confirmContainer}
          // onPress={() => navigation.navigate("ConfirmationPage")}
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
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#751811",
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 2,
    paddingVertical: 8,
    paddingHorizontal: 10,
    //width: "50%",
  },
  buttonText: {
    fontSize: 15,
    color: "#000000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    paddingVertical: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    paddingVertical: 15,
  },
  imageStyle: {
    height: 250,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  confirmContainer: {
    elevation: 8,
    backgroundColor: "#2349c2",
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  space: {
    width: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
