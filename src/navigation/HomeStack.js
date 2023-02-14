import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ActualHome from "../pages/ActualHome";
import { StyleSheet, TouchableOpacity, LogoTitle } from "react-native";
import { Card } from "react-native-paper";
import Ionic from "react-native-vector-icons/Ionicons";

import BookingPage from "../pages/Booking";
import FacilityInformation from "../pages/FacilityInformation";
import FilterPage from "../pages/Filter";
import HomePage from "../pages/Home";
import ListingsPage from "../pages/Listings";
import MapPage from "../pages/Map";
import RoomDetails from "../pages/RoomDetail";
import TaskList from "../pages/TaskList";
import ScanningPage from "../pages/Scanning";

import DetailedMap from "../pages/DetailedMap";
const Stack = createNativeStackNavigator();
const HomeStack = ( {navigation} ) => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={({ navigation }) => ({
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
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("TaskList")}>
              <Card>
                  <Ionic name="list" color="white" size={30} style={{ backgroundColor: "#1a2222" }}/>
              </Card>
          </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#1a2222",
            height: 50,
          },
          headerTintColor: "#ffffff",
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTitle: "Home",
          headerTitleStyle: {
            color: "white",
          },
        })}
      >
        <Stack.Screen
          options={{ 
            headerTitle: "Navigation",
          }}
          name="Default"
          component={HomePage}
        />
        <Stack.Screen
          name="TaskList"
          component={TaskList}
          options={({ navigation }) => ({
            headerTitle: "Task List",
          })}
        />
        <Stack.Screen
          options={{ headerTitle: "Bookings" }}
          name="Bookings"
          component={BookingPage}
        />
        <Stack.Screen
          options={{ headerTitle: "Listings" }}
          name="Listings"
          component={ListingsPage}
        />
        <Stack.Screen
          options={{ headerTitle: "Home" }}
          name="LandingPage"
          component={ActualHome}
        />
        <Stack.Screen
          options={{ headerTitle: "Search" }}
          name="Filter"
          component={FilterPage}
        />
        <Stack.Screen
          name="Map"
          options={{ headerTitle: "Section View" }}
          component={MapPage}
        />
        <Stack.Screen
          name="FacilityInfo"
          component={FacilityInformation}
          options={{ headerTitle: "Facility Information" }}
        />
        <Stack.Screen
          name="Scanning"
          component={ScanningPage}
          options={{ headerTitle: "Scan QR code" }}
        />
        <Stack.Screen
          name="DetailedMap"
          component={DetailedMap}
          options={{ headerTitle: "Focused View" }}
        />
        <Stack.Screen name="RoomDetail" component={RoomDetails}/>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#1a2222",
  },
  linearGradient: {
    height: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    elevation: 25,
  },
});
