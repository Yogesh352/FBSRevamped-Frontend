import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ActualHome from "../pages/ActualHome";

import BookingPage from "../pages/Booking";
import FilterPage from "../pages/Filter";
import HomePage from "../pages/Home";
import ListingsPage from "../pages/Listings";
import MapPage from "../pages/Map";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Default"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Listings"
        component={ListingsPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bookings"
        component={BookingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={MapPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Filter"
        component={FilterPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LandingPage"
        component={ActualHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
