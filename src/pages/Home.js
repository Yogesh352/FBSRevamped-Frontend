import { Button, Text,  View, StyleSheet } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View style={{ padding: 10, flex: 1, justifyContent: "space-evenly" }}>
      <View></View>
      <Button
        title="Go to Filter Page"
        onPress={() => navigation.navigate("Filter")}
      />
      <Button
        title="Go to Listings Page"
        onPress={() => navigation.navigate("Listings")}
      />
      <Button
        title="Go to Booking Page"
        onPress={() => navigation.navigate("Bookings")}
      />
      <Button
        title="Go to Map Page"
        onPress={() => navigation.navigate("Map")}
      />
    </View>
  );
};

export default HomePage;
