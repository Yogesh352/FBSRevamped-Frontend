import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Text } from "react-native-paper";
import BookingComponent from "../components/Homepage/BookingComponent"
import FavouritesComponent from "../components/Homepage/FavouritesComponent";
import InstantBooking from "../components/Homepage/InstantBooking";

const ActualHome = () => {
  //   const [index, setIndex] = React.useState(0);
  const [favoriteDisplayed, setFavoriteDisplayed] = useState("School of Economics");

  return (
    <View style={styles.content}>
        <ScrollView style={styles.scroll}> 
            <Text style={styles.titleText}> Upcoming Bookings </Text>
            <BookingComponent type="Booking"/>
            <BookingComponent type="Booking"/>
            {/* <BookingComponent />
            <BookingComponent />
            <BookingComponent />
            <BookingComponent /> */}

            <Text style={styles.titleText}> Favourites </Text>
            <Text style={styles.favourite}> {favoriteDisplayed} </Text>
            <FavouritesComponent />

            {/* <Text style={styles.titleText}> Instant Seating </Text>
            <InstantBooking /> */}
            <Text style={styles.titleText}> Book Now </Text>
            <InstantBooking />
        </ScrollView>
    </View>
  );
};


const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    backgroundColor: "#1a2222",
    height: "100%"
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
  favourite: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
    marginTop: -5,
  },
});

export default ActualHome;
