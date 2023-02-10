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
            {/* <BookingComponent />
            <BookingComponent />
            <BookingComponent />
            <BookingComponent /> */}

            <Text style={styles.titleText}> Favourites </Text>
            <Text style={styles.favourite}> {favoriteDisplayed.title} </Text>
            <FavouritesComponent />

            <Text style={styles.titleText}> Instant Seating </Text>
            <InstantBooking />
        </ScrollView>
    </View>
  );
};


const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
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
