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
import { Header } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

const App = () => {
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
              return <Ionic name={iconName} size={size} colour={colour} />;
            },

            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "black",
            tabBarShowLabel: false,

            tabBarStyle: {
              height: 60,
              paddingBottom: 5,
              position: "absolute",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
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
              // headerBackground: () => (
              //   <LinearGradient
              //     colors={["#879fe9", "#2349c2"]}
              //     style={[StyleSheet.absoluteFill, styles.linearGradient]}
              //   />
              // ),
              // headerTitle: "FBS",
              // headerTitleStyle: {
              //   fontWeight: "bold",
              //   color: "yellow",
              //   fontSize: 25,
              // },
            }}
          />
          <Tab.Screen
            name="Booking"
            component={BookingPage}
            options={{
              headerTitle: "FBS",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
                fontSize: 25,
              },
              headerBackground: () => (
                <LinearGradient
                  colors={["#879fe9", "#2349c2"]}
                  style={[StyleSheet.absoluteFill, styles.linearGradient]}
                />
              ),
              headerStyle: {
                height: 150,
              },
            }}
          />
          <Tab.Screen
            name="Scanning"
            component={ScanningPage}
            options={{
              headerTitle: "FBS",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
                fontSize: 25,
              },
              headerBackground: () => (
                <LinearGradient
                  colors={["#879fe9", "#2349c2"]}
                  style={[StyleSheet.absoluteFill, styles.linearGradient]}
                />
              ),
              headerStyle: {
                height: 150,
              },
              tabBarButton: (props) => (
                <TouchableOpacity
                  style={{
                    top: -30,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={props.onPress}
                >
                  <View
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                      backgroundColor: "#1D889F",
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
                    <Ionic name="scan" colour="black" size={35} />
                  </View>
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            options={{
              headerTitle: "FBS",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
                fontSize: 25,
              },
              headerBackground: () => (
                <LinearGradient
                  colors={["#879fe9", "#2349c2"]}
                  style={[StyleSheet.absoluteFill, styles.linearGradient]}
                />
              ),
              headerStyle: {
                height: 150,
              },
            }}
            name="Favourites"
            component={FavouritesPage}
          />
          <Tab.Screen
            options={{
              headerTitle: "FBS",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
                fontSize: 25,
              },
              headerBackground: () => (
                <LinearGradient
                  colors={["#879fe9", "#2349c2"]}
                  style={[StyleSheet.absoluteFill, styles.linearGradient]}
                />
              ),
              headerStyle: {
                height: 150,
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
