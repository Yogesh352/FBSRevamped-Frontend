import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BookingPage from "./src/pages/Booking";
import Ionic from "react-native-vector-icons/Ionicons";
import ScanningPage from "./src/pages/Scanning";
import FavouritesPage from "./src/pages/Favourites";
import ProfilePage from "./src/pages/Profile";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import HomeStack from "./src/navigation/HomeStack";
import { LinearGradient } from "expo-linear-gradient";
import { StackRouter } from "react-navigation";

const Tab = createBottomTabNavigator();

const App = () => {
  console.disableYellowBox = true;
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, colour }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Booking") {
                iconName = focused ? "calendar" : "calendar-outline";
              } else if (route.name === "Scanning") {
                iconName = focused ? "scan-circle" : "scan";
              } else if (route.name === "Favourites") {
                iconName = focused ? "heart" : "heart-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person-circle" : "person-circle-outline";
              }
              return <Ionic name={iconName} size={30} color={"#899190"} />;
            },

            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "black",
            tabBarShowLabel: false,

            tabBarStyle: {
              height: 70,
              paddingBottom: 5,
              position: "absolute",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderColor: "transparent",
              backgroundColor: "#081113",
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Booking"
            component={BookingPage}
            options={{
              headerStyle: {
                backgroundColor: "#1a2222",
                height: 80,
              },
              headerTintColor: "#ffffff",
              headerShadowVisible: false,
              headerTitleAlign: "center",
              headerTitle: "Booking",
              headerTitleStyle: {
                color: "white",
              },
            }}
          />
          <Tab.Screen
            name="Scanning"
            component={ScanningPage}
            options={{
              headerStyle: {
                backgroundColor: "#1a2222",
                height: 80,
              },
              headerTintColor: "#ffffff",
              headerShadowVisible: false,
              headerTitleAlign: "center",
              headerTitle: "Scanner",
              headerTitleStyle: {
                color: "white",
              },

              tabBarButton: (props) => (
                <TouchableOpacity
                  style={{
                    top: 4,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={props.onPress}
                >
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 50,
                      backgroundColor: "#8eaec5",
                      justifyContent: "center",
                      alignItems: "center",
                      shadow: {
                        shadowColor: "#ffff",
                        shadowOffset: {
                          width: 0,
                          height: 10,
                        },
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.5,
                      elevation: 5,
                    }}
                  >
                    <Ionic name="scan" color="black" size={35} />
                  </View>
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            options={{
              headerStyle: {
                backgroundColor: "#1a2222",
                height: 80,
              },
              headerTintColor: "#ffffff",
              headerShadowVisible: false,
              headerTitleAlign: "center",
              headerTitle: "Favourites",
              headerTitleStyle: {
                color: "white",
              },
            }}
            name="Favourites"
            component={FavouritesPage}
          />
          <Tab.Screen
            options={{
              headerStyle: {
                backgroundColor: "#1a2222",
                height: 80,
              },
              headerTintColor: "#ffffff",
              headerShadowVisible: false,
              headerTitleAlign: "center",
              headerTitle: "Profile",
              headerTitleStyle: {
                color: "white",
              },
            }}
            name="Profile"
            component={ProfilePage}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F4F6FB",
  },
  linearGradient: {
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    elevation: 25,
  },
});
// import { View, Text } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>Hello</Text>
//     </View>
//   )
// }

// export default App
