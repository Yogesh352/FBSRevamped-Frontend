import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
const Confirmation = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);
  return (
    <View style={{ padding: 10, flex: 1, justifyContent: "space-evenly" }}>
      <Text>Date: 14th Febuary 2023 (Tues)</Text>
      <Text>Time: 8.00am to 9.00am</Text>
      <Text>Duration: 1 hour</Text>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Confirm</Text>
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
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
})