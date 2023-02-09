import React, { Component, useRef, useState } from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Carousel, { Pagination } from "react-native-snap-carousel";
import BookingComponent from "../components/Homepage/BookingComponent"
import FavouritesComponent from "../components/Homepage/FavouritesComponent";

// mocked data (Favourites)
const data = [
    {
      id: 1,
      title: "School of Computing",
      body: "Seminar Room 3-1",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      id: 2,
      title: "School of Accountancy",
      body: "Group Study Room 2-11",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      id: 3,
      title: "School of Law",
      body: "Classroom B1-1",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
];

const ActualHome = () => {
  //   const [index, setIndex] = React.useState(0);
  const [favoriteDisplayed, setFavoriteDisplayed] = useState(data[0]);

  return (
    <View style={styles.content}>
        <ScrollView style={styles.scroll}> 
            <Text style={styles.titleText}> Upcoming Bookings </Text>
            <BookingComponent />
            <BookingComponent />
            <BookingComponent />
            <BookingComponent />
            <BookingComponent />
            <BookingComponent />

            <Text style={styles.titleText}> Favourites </Text>
            <Text style={styles.favourite}> {favoriteDisplayed.title} </Text>

            <FavouritesComponent />

            <Text style={styles.titleText}> Instant Seating </Text>

            <TouchableOpacity>
                <Card>
                    <Card.Cover 
                    source={require("../assets/cafe.png")}
                    style={styles.findMeSeatButton}
                    />
                <Text style={styles.findMeASeatText}> Find Me A Seat </Text>
                </Card>
            </TouchableOpacity>
        </ScrollView>
    </View>
  );
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    backgroundColor: "#1a2222",
  },
  scroll: {
    marginBottom: 85
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#94c0db",
    marginVertical: 5,
  },
  findMeSeatButton: {
    color: "white",
    height: 100,
    width: "100%",
    borderRadius: 12
  },
  findMeASeatText: {
    marginTop: -44,
    marginLeft: "56%",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  favourite: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
    marginTop: -5,
  },
});

export default ActualHome;
