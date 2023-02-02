import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/pages/Home";
import ListingsPage from "./src/pages/Listings";
import BookingPage from "./src/pages/Booking";
import MapPage from "./src/pages/Map";
import FilterPage from "./src/pages/Filter";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Welcome" }}
        />
       <Stack.Screen
          name="Listings"
          component={ListingsPage}
          
        />
        <Stack.Screen
          name="Bookings"
          component={BookingPage}
          
        />
        <Stack.Screen
          name="Map"
          component={MapPage}
          
        />
        <Stack.Screen
          name="Filter"
          component={FilterPage}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default App;
