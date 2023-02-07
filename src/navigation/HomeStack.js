import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import ActualHome from "../pages/ActualHome";
import { StyleSheet } from "react-native";
import BookingPage from "../pages/Booking";
import FacilityInformation from "../pages/FacilityInformation";
import FilterPage from "../pages/Filter";
import HomePage from "../pages/Home";
import ListingsPage from "../pages/Listings";
import MapPage from "../pages/Map";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Group
        screenOptions={{
          // headerTitleStyle: {
          //   fontWeight: "bold",
          //   color: "white",
          //   fontSize: 25,
          // },
          // headerBackground: () => (
          //   <LinearGradient
          //     colors={["#879fe9", "#2349c2"]}
          //     style={[StyleSheet.absoluteFill]}
          //   />
          // ),
          // headerStyle: {
          //   height: 150,
          // },
          headerStyle: {
            backgroundColor: "#2349cf",
            height: 50
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitle: 'Home',
          headerTitleStyle: {
            color: "white"
          }
        }}
      >
        <Stack.Screen options={{headerTitle:"Home"}} name="Default" component={HomePage} />
        <Stack.Screen options={{headerTitle:"Bookings"}} name="Bookings" component={BookingPage} />
        <Stack.Screen options={{headerTitle:"Listings"}} name="Listings" component={ListingsPage} />
        <Stack.Screen options={{headerTitle:"Home"}} name="LandingPage" component={ActualHome} />
        <Stack.Screen options={{headerTitle:"Search"}} name="Filter" component={FilterPage} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerTitle: "Section Layout",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
            fontSize: 25,
          },
          headerBackground: () => (
            <LinearGradient
              colors={["#879fe9", "#2349c2"]}
              style={[StyleSheet.absoluteFill]}
            />
          ),
          headerStyle: {
            height: 150,
          },
        }}
      >
        <Stack.Screen name="Map" component={MapPage} />
      </Stack.Group>

      <Stack.Screen
        name="FacilityInfo"
        component={FacilityInformation}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F4F6FB",
  },
  linearGradient: {
    height: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    elevation: 25,
  },
});
