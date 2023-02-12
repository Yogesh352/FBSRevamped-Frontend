import * as React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FacilitiesListing from '../components/Listings/FacilitiesListing';
import SeatsListing from "../components/Listings/SeatsListing";

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
      <Tab.Navigator 
          initialRouteName="FacilitiesListing" 
          screenOptions={{ 
              tabBarIndicatorStyle: {backgroundColor: '#94c0db', height: 5},
              tabBarStyle: {backgroundColor: '#1a2222'},
          }}>
      <Tab.Screen
          name="FacilitiesListing"
          component={FacilitiesListing}
          options={{
            tabBarLabel: "Facilities",
            tabBarLabelStyle: {color: 'white'}
          }}
      />
      <Tab.Screen
          name="SeatsListing"
          component={SeatsListing}
          options={{
            tabBarLabel: "Seats", 
            tabBarLabelStyle: {color: 'white'}
          }}
      />
      </Tab.Navigator>
  );
}

const ListingsPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
      <TopTabs/>
    </View>
  );
};

export default ListingsPage;
