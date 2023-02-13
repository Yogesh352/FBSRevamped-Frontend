import React, { useState, useEffect, useRef } from "react";
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

const TimeButton = ({ first, second, third }) => {

  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flexDirection: "row", backgroundColor: "#1a2222" }}>
      <ModalPopup visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={()=> setVisible(false)}>
              <Image
                source={require("../images/x.jpg")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
           source = {require("../images/tick.png")}
           style = {{ height: 150, width: 150, marginVertical: 10 }}
          />
         
        </View>
        <Text style={styles.successText}>
          {" "}
          Time slot successfully added!{" "}
        </Text>
      </ModalPopup>

      <View style={styles.space} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          setVisible(true);
        }}
      >
        <Text style={styles.buttonText}>{first}</Text>
      </TouchableOpacity>


      <View style={styles.space} />
      <TouchableOpacity style={styles.buttonContainer}
      onPress={() => {
        setVisible(true);
      }}>
        <Text style={styles.buttonText}>{second}</Text>
      </TouchableOpacity>

      <View style={styles.space} />
      <TouchableOpacity style={styles.buttonContainer}
      onPress={() => {
        setVisible(true);
      }}>
        <Text style={styles.buttonText}>{third}</Text>
      </TouchableOpacity>
      <View style={styles.space} />
    </View>
  );
};

const BookingPage = ({ navigation }) => {
  return (
    <View style = { {backgroundColor: "#1a2222"}}>
      <Text style={styles.headerText}>LKS Seat 80</Text>

      <Image
        source={require("../images/LKSImage.jpg")}
        style={styles.imageStyle}
      />
      <Text style={styles.titleText}>Available Booking Slots</Text>
      <View style={{ marginTop: -20 }}>
        <TimeButton
          first={"8.00AM"}
          second={"9.00AM"}
          third={"10.00AM"}
        ></TimeButton>
        <TimeButton
          first={"11.00AM"}
          second={"12.00PM"}
          third={"1.00PM"}
        ></TimeButton>
        <TimeButton
          first={"2.00PM"}
          second={"3.00PM"}
          third={"4.00PM"}
        ></TimeButton>
        <TimeButton
          first={"5.00PM"}
          second={"6.00PM"}
          third={"7.00PM"}
        ></TimeButton>
      </View>

      <View
        style={{ padding: 10, marginVertical: 30, backgroundColor: "#1a2222" }}
      >
        <TouchableOpacity
          style={styles.confirmContainer}
          onPress={() => navigation.navigate("Confirmation")}
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
    backgroundColor: "#293637",
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 2,
    paddingVertical: 8,
    paddingHorizontal: 10,
    //width: "50%",
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
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    backgroundColor: "#1a2222",
    textTransform: "uppercase",
    paddingVertical: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    backgroundColor: "#1a2222",
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
    color: "white",
    backgroundColor: "#293637",
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
    backgroundColor: "#293637",
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
  successText: { 
    marginVertical: 30,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"}
  
});
