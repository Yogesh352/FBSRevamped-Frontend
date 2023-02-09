import * as React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FacilitiesListing from '../components/Listings/FacilitiesListing';
import SeatsListing from "../components/Listings/SeatsListing";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    // <View >
        <Tab.Navigator 
            initialRouteName="FacilitiesListing" 
            screenOptions={{ 
                activeTintColor: "#e91e63", 
                labelStyle: {fontSize:12}, 
                barStyle: {backgroundColor: 'transparent'}}}>
        <Tab.Screen
            name="FacilitiesListing"
            component={FacilitiesListing}
            options={{tabBarLabel: "Facilities"}}
        />
        <Tab.Screen
            name="SeatsListing"
            component={SeatsListing}
            options={{tabBarLabel: "Seats"}}
        />
        </Tab.Navigator>
    // </View>

  );
}

const ListingsPage = ({ navigation }) => {
  return (
    <View>
        <LinearGradient style={{ height: "100%" }} colors={["#2349cf", "#B79fe9"]}>
            <View style={{ padding: 10, flex: 1, justifyContent: "space-evenly", backgroundColor: 'transparent' }}>

            <TopTabs/>
          
          </View>
        </LinearGradient>
    </View>
    
  );
};

export default ListingsPage;
