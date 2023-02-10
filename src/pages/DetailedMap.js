import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DetailedMapLayout from "../components/Map/DetailedMapLayout/DetailedMapLayout";

const DetailedMap = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.titleText}>LKS Level 2 Section A</Text>
      <DetailedMapLayout />
    </View>
  );
};

export default DetailedMap;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#1a2222",
    height: "100%",
    paddingHorizontal: 20,
    flex: 1,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#94c0db",
    marginVertical: 5,
  },
});
