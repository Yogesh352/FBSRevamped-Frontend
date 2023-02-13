import { Button, Text, View, StyleSheet } from "react-native";

const ProfilePage = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#1a2222",
        padding: 10,
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={{ color: "white" }}>This is profile</Text>
    </View>
  );
};

export default ProfilePage;
