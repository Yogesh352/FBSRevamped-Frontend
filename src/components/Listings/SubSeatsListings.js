import React, { useEffect, useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons";

import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  TouchableHighlight,
  Modal,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#1a2222",
      }}
    >
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
              <Text style={styles.modalText}>Floor Map</Text>
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
            <Image
              style={styles.locationImage}
              source={require("../../images/annotated_map.jpg")}
            />
          </View>
        </View>
      </Modal>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        // onPress={onClickFunction}
        onPress={() => navigation.navigate("Map")}
        style={styles.header}
      >
        <Text style={styles.headerText}>{item.category_name}</Text>
        <View style={{ flexDirection: "row" }}>
          {/* <TouchableOpacity onPress={() => setOpenModal(true)}>
            <Text style={{ marginRight: 10, color: "white" }}>Test B</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => navigation.navigate("Map")}>
            <Ionicons
              name="map-outline"
              size={18}
              color={"white"}
              style={{
                alignSelf: "center",
              }}
            />
          </TouchableOpacity> */}
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            // edit to go to new page
            onPress={() => navigation.navigate("Bookings")}
          >
            <Text style={styles.text}>{item.val}</Text>

            {/* <View style={styles.separator} /> */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const SubSeatListing = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  const navigation = useNavigation();

  const [showPopup, setShowPopup] = useState(false);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]["isExpanded"] = !array[index]["isExpanded"];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
          : (array[placeindex]["isExpanded"] = false)
      );
    }
    setListDataSource(array);
  };

  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        marginTop: "0%",
        backgroundColor: "#1a2222",
      }}
    >
      <View style={styles.container}>
        <ScrollView>
          {listDataSource.map((item, key) => (
              <TouchableOpacity
                onPress={() => {
                  if (item.category_name==="Level 2") {
                    navigation.navigate("Map")
                  } else {
                    setShowPopup(true);
                  }
                }}
              >
                <ExpandableComponent
                  key={item.category_name}
                  onClickFunction={() => {
                    updateLayout(key);
                  }}
                  item={item}
                />
                { (item.category_name==="Level 2") &&
                  <Ionic
                    name="lock-open"
                    size={32}
                    color="#7f9988"
                    style={styles.unlock}
                  />
                }
                { (item.category_name!=="Level 2") &&
                  <Ionic
                    name="lock-closed"
                    size={32}
                    color="#997f7f"
                    style={styles.lock}
                  />
                }
            </TouchableOpacity>
          ))}

          {showPopup &&
            <TouchableOpacity 
              onPress={() => (
                setShowPopup(false)
              )}
              style={styles.lockedPopup}
            >
              <Text>
                Sorry, this section is currently locked. Check back in later!
              </Text>
            </TouchableOpacity>
          }

        </ScrollView>
      </View>
    </View>
  );
};

export default SubSeatListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#4a5a64",
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1a2222",

    marginHorizontal: 3,
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "medium",
    textAlign: "left",
    paddingLeft: 0,
    marginLeft: 0,
    color: "white",
  },
  //   separator: {
  //     height: 0.5,
  //     backgroundColor: '#000000',
  //     width: '100%',
  //   },
  text: {
    fontSize: 16,
    color: "white",
  },
  content: {
    padding: 10,
    // paddingLeft: 5,
    width: "98%",
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",

    backgroundColor: "#657384",
    borderWidth: 0.5,
    borderBottomWidth: 0,

    borderColor: "#1a2222",
  },
  modalStyle: {
    alignSelf: "center",
    alignContent: "center",
    width: "90%",
    height: "60%",
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
  locationImage: {
    height: "70%",
    width: "100%",
    borderRadius: 10,
  },
  modalText: {
    color: "#e9e8ea",
    fontSize: 20,
  },
  lock: {
    position: 'absolute',
    paddingLeft: '90%',
    paddingTop: 6
  },
  unlock: {
    position: 'absolute',
    paddingLeft: '90%',
    paddingTop: 6,
    zIndex: 1000
  },
  lockedPopup: {
    // position: "absolute",
    alignSelf: "center",
    padding: 16,
    backgroundColor: '#94c0db',
    marginTop: 16,
    width: "90%"
  }
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: "Level 2",
    subcategory: [
      //   { id: "Seat1", val: "Seat 1" },
      //   { id: "Seat2", val: "Seat 2" },
      //   { id: "Seat3", val: "Seat 3" },
      //   { id: "Seat4", val: "Seat 4" },
    ],
    isLocked: false
  },
  {
    isExpanded: false,
    category_name: "Level 3",
    subcategory: [
      //   { id: "Seat1", val: "Seat 4" },
      //   { id: "Seat2", val: "Seat 5" },
      //   { id: "Seat3", val: "Seat 6" },
    ],
    isLocked: true
  },
  {
    isExpanded: false,
    category_name: "Level 4",
    subcategory: [
      //   { id: "Seat1", val: "Seat 4" },
      //   { id: "Seat2", val: "Seat 5" },
      //   { id: "Seat3", val: "Seat 6" },
    ],
    isLocked: true
  },
];
