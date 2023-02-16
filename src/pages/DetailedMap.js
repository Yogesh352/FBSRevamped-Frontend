import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from "react-native";
import DetailedMapLayout from "../components/Map/DetailedMapLayout/DetailedMapLayout";
import Ionic from "react-native-vector-icons/Ionicons";
import { color } from "react-native-reanimated";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import BottomSheetContent from "../components/Map/DetailedMapLayout/BottomSheetContent";
const DetailedMap = () => {
  const [openModal, setOpenModal] = useState(false);
  const [pressed, setPressed] = useState(false);

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["40%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    // console.log("handleSheetChanges", index);
    setPressed(false);
  }, []);

  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    if (didMount === false) {
      setDidMount(true);
    } else {
      handlePresentModalPress();
      // console.log(pressed);
    }
  }, [pressed]);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.content}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            handleComponent={() => (
              <View style={styles.bottomSheetTopBackground}>
                <View style={styles.bottomSheetCloseline}></View>
              </View>
            )}
            onChange={handleSheetChanges}
          >
            <BottomSheetContent />
          </BottomSheetModal>
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
                  <Text style={styles.modalText}>Legend</Text>
                  <TouchableHighlight
                    onPress={() => {
                      setOpenModal(false);
                      console.log(openModal);
                    }}
                  >
                    <Ionic
                      name="close"
                      size={30}
                      color={"#e9e8ea"}
                      onPress={() => {
                        setOpenModal(false);
                      }}
                    />
                  </TouchableHighlight>
                </View>
                {colorData.map((colorData) => {
                  return (
                    <View style={{ marginBottom: 10, flexDirection: "row" }}>
                      <View
                        style={[
                          styles.circleColor,
                          { backgroundColor: colorData.color },
                        ]}
                      />
                      <Text style={styles.colorMeaning}>{colorData.text}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </Modal>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.titleText}>LKS Level 2 Section C</Text>
            <TouchableHighlight
              onPress={() => {
                setOpenModal(true);
                console.log(openModal);
              }}
            >
              <Ionic
                name="information-circle-outline"
                size={30}
                style={{ paddingTop: 2 }}
                color={"#94c0db"}
              />
            </TouchableHighlight>
          </View>

          <DetailedMapLayout pressed={pressed} setPressed={setPressed} />
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default DetailedMap;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#1a2222",

    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#94c0db",
    marginVertical: 5,
    flex: 1,
  },
  modalStyle: {
    alignSelf: "center",
    alignContent: "center",
    width: "60%",
    height: "30%",
    padding: 10,
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
  circleColor: {
    width: 22,
    height: 22,
    borderRadius: 22 / 2,
    // backgroundColor: "#94c0db",
    marginRight: 20,
    borderColor: "black",
    borderWidth: 2,
  },
  colorMeaning: {
    color: "#e9e8ea",
  },

  bottomSheetTopBackground: {
    backgroundColor: "#293637",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    justifyContent: "center",
  },
  bottomSheetCloseline: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: "grey",
    marginTop: 9,
    alignSelf: "center",
  },
});

const colorData = [
  {
    text: "Booked",
    color: "#4a5a64",
  },
  {
    text: "Unoccupied",
    color: "#94c0db",
  },
  {
    text: "Cannot be booked",
    color: "#293637",
  },
];
