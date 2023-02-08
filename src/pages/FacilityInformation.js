import React, { useState, useEffect } from "react";
import {
    Button,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { Card, Text, Button } from "react-native-paper";
// import { TimePickerModal } from "react-native-paper-dates";
import "intl"; //npm install intl
import Header from "../components/Header";
const FacilityInformation = ({ navigation }) => {
    const [outVisible, setOutVisible] = useState(false);
    const [outTime, setOutTime] = useState("2023-02-08T00:00:36.265Z");

    const [retVisible, setRetVisible] = useState(false);
    const [retTime, setRetTime] = useState("2023-02-08T00:00:36.265Z");

    const onDismiss = React.useCallback(() => {
        setOutVisible(false);
    }, [setOutVisible]);

    const handleOutConfirm = (outTime) => {
        setOutTime(outTime);
        console.log("A out time has been picked: ", outTime);
        setOutVisible(false);
    };

    const handleRetConfirm = (retTime) => {
        setRetTime(retTime);
        console.log("A return time has been picked: ", retTime);
        setOutVisible(false);
    };

    return (
        <LinearGradient
            style={{ height: "100%" }}
            colors={["#2349cf", "#B79fe9"]}
        >
            <Header />
            <View style={styles.container}>
                <Text style={styles.maintext}>Seat #12232</Text>
                <View style={styles.headercontainer}>
                    <Text>This Seat has been booked by you!</Text>
                </View>

                <Text style={styles.maintext}>Details</Text>
                <View style={styles.headercontainer}>
                    <View style={styles.timecontainer}>
                        <Text>Out Time:</Text>
                        <TouchableOpacity
                            style={styles.timebutton}
                            onPress={() => setOutVisible(true)}
                        >
                            {/* <Text> Select Time </Text> */}
                            <Text style={styles.timetext}>
                                {JSON.stringify(outTime).substring(12, 17)}
                            </Text>
                            <DateTimePickerModal
                                isVisible={outVisible}
                                mode="time"
                                onConfirm={handleOutConfirm}
                                onCancel={() => setOutVisible(false)}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.timecontainer}>
                        <Text>Return Time:</Text>
                        <TouchableOpacity
                            style={styles.timebutton}
                            onPress={() => setRetVisible(true)}
                        >
                            {/* <Text> Select Time </Text> */}
                            <Text style={styles.timetext}>
                                {JSON.stringify(retTime).substring(12, 17)}
                            </Text>
                            <DateTimePickerModal
                                isVisible={retVisible}
                                mode="time"
                                onConfirm={handleRetConfirm}
                                onCancel={() => setRetVisible(false)}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.reasoncontainer}>
                        <Text>Reason:</Text>
                        <TextInput
                            placeholder="Your reason"
                            style={styles.textbox}
                        ></TextInput>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        display: "flex",
        margin: 20,
    },
    headercontainer: {
        // flex: 19
        margin: 10,
        minHeight: 60,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "white",
        // flexDirection: "row",
    },
    maintext: {
        fontSize: 25,
        // fontWeight: "bold",
        color: "white",
    },
    timecontainer: {
        // backgroundColor:'red',
        display: "flex",
        flexDirection: "row",
        margin: 10,
        // flex: 'row'
        alignItems: "baseline",
        // justifyContent: 'center',
    },
    timer: {
        width: "30%",
        outlineColor: "red",
        backgroundColor: "#e7622e",
        // display:'flex',
        // justifyContent:'flex-start',
    },
    timebutton: {
        marginLeft: 10,
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 10,
        // backgroundColor: 'red',
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // width: 30
    },
    timetext: {
        marginLeft: 10,
        marginRight: 10,
    },
    reasoncontainer: {
        // backgroundColor:'red',
        display: "flex",
        flexDirection: "row",
        margin: 10,
        // flex: 'row'
        // alignItems: "baseline",
        // justifyContent: 'center',
    },
    textbox: {
        marginLeft: 10,
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 10,
        minHeight: 60,
        minWidth: 200,
        padding:20,
    },
});
export default FacilityInformation;
