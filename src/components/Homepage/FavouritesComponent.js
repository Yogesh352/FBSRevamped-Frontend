import { View, FlatList, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Card, Text } from "react-native-paper";

// mocked data (Favourites)
const data = [
    {
      id: 1,
      title: "School of Computing",
      body: "Seminar Room 3-1",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      id: 2,
      title: "School of Accountancy",
      body: "Group Study Room 2-11",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      id: 3,
      title: "School of Law",
      body: "Classroom B1-1",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
];

// width value (for styling)
const { height, width } = Dimensions.get("window");

export default function FavouritesComponent() {
    return(
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatList}
                horizontal={true}
                data={data}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={styles.cardContainer}>
                        <Card style={[styles.card]}>
                            <Card.Cover
                            style={styles.image}
                            source={{ uri: item.imgUrl }}
                            />
                            <Card.Content>
                                <Text style={styles.body}> {item.body} </Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      height: 230,
    },
    cardContainer: {
      height: 100,
      width: width * 0.5,
      marginRight: 16,
    },
    card: {
      height: 100,
      width: width * 0.5,
      borderRadius: 12,
      // padding: 10,
    },
    image: {
      height: 200,
    },
    text: {
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
      marginTop: -60,
    },
    // header: {
    //   color: "white",
    //   fontSize: 20,
    //   fontWeight: "bold",
    //   paddingBottom: 5,
    //   marginTop: -5,
    // },
    body: {
      // flex: 1,
      // flexDirection: "row",
      // alignItems: "center",
      color: "#6d6b6a",
      fontSize: 16,
    },
});