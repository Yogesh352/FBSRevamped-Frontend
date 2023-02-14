import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

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
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}
      >
        <Text style={styles.headerText}>{item.category_name}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <Ionicons
            name="map-outline"
            size={18}
            color={"white"}
            style={{
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
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
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
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
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: "Level 2",
    subcategory: [
      { id: "Seat1", val: "Seat 1" },
      { id: "Seat2", val: "Seat 2" },
      { id: "Seat3", val: "Seat 3" },
      { id: "Seat4", val: "Seat 4" },
    ],
  },
  {
    isExpanded: false,
    category_name: "Level 3",
    subcategory: [
      { id: "Seat1", val: "Seat 4" },
      { id: "Seat2", val: "Seat 5" },
      { id: "Seat3", val: "Seat 6" },
    ],
  },
];
