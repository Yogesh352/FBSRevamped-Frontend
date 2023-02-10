import * as React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FacilitiesListing from '../components/Listings/FacilitiesListing';
import SeatsListing from "../components/Listings/SeatsListing";

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
      <Tab.Navigator 
          initialRouteName="FacilitiesListing" 
          screenOptions={{ 
              activeTintColor: "#e91e63", 
              labelStyle: {fontSize:12}, 
              style: {backgroundColor: 'white'}}}>
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
  );
}

const ListingsPage = ({ navigation }) => {
  return (
    <View style={{ padding: 10, flex: 1, justifyContent: "space-evenly" }}>
      <TopTabs/>
    </View>
  );
};

export default ListingsPage;
