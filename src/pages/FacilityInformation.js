import React, { useState, useEffect } from "react";
import {
    Button,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Animatable from "react-native-animatable";
import DropDownPicker from "react-native-dropdown-picker";
// import { Card, Text, Button } from "react-native-paper";
// import { TimePickerModal } from "react-native-paper-dates";
// import "intl"; //npm install intl

const FacilityInformation = ({ navigation }) => {
    // ************Time Picker start****************
    const [outVisible, setOutVisible] = useState(false);
    const [outTime, setOutTime] = useState("2023-02-08T00:00:36.265Z");

    const [retVisible, setRetVisible] = useState(false);
    const [retTime, setRetTime] = useState("2023-02-08T00:00:36.265Z");

    const handleOutConfirm = (outTime) => {
        setOutTime(outTime);
        console.log("A out time has been picked: ", outTime);
        setOutVisible(false);
    };

    const handleRetConfirm = (retTime) => {
        setRetTime(retTime);
        console.log("A return time has been picked: ", retTime);
        JSON.stringify(retTime).substring(12, 17);
        setRetVisible(false);
    };
    // ************Time Picker end****************

    // ************Seat Name start****************
    const [seatName, setSeatName] = useState("Seat LKS.L2.S15");

    const updateSeatName = (val) => {
        setSeatName(val);
    };
    // ************Seat Name end****************

    // ************Reason text input start****************
    const [reason, setReason] = useState({ reasonString: "" });

    const reasonInputChange = (val) => {
        setReason({ ...reason, reasonString: val });
        console.log(reason);
    };
    // ************Reason text input end***************

    // ************seat Dscription start****************
    const [isOwner, setIsOwner] = useState(true); //change this to false to activate the not owner screen
    const [isBooked, setIsBooked] = useState(false);
    const [ownerEmail, setownerEmail] = useState("jerry.2021@scis.smu.edu.sg");

    const SeatDescription = () => {
        if (isOwner === true) {
            return (
                <Text style={styles.secondarytext}>
                    This Seat has been booked by you!
                </Text>
            );
        } else if (isBooked === true) {
            return (
                <Text style={styles.secondarytext}>
                    This Seat has been booked by{" "}
                    <Text
                        style={{
                            fontWeight: "bold",
                            textDecorationLine: "underline",
                        }}
                    >
                        {ownerEmail}
                    </Text>
                </Text>
            );
        } else {
            return (
                <Text style={styles.secondarytext}>
                    This Seat is not booked.
                </Text>
            );
        }
    };
    // ************seat Description end****************

    // ************Description start****************
    // if isBooked is true, option is to report, if false, user can book the seat

    const [open, setOpen] = useState(false);
    var [value, setValue] = useState([]);
    const [items, setItems] = useState([
        { label: "Noisy", value: "noisy" },
        { label: "Left Trash Behind", value: "trash" },
        { label: "Hogging", value: "hogging" },
    ]);

    const [count, setCount] = useState(0);

    const [selectedItems, setSelectedItems] = useState([]);

    const setSelctedItems = () => {
        setCount(count + 1);
        if (count == 0) {
            setValue(selectedItems);
        }
    };

    var addItem = (item) => {
        if (!selectedItems.includes(item)) {
            setSelectedItems(selectedItems.concat([item]));
        } else {
            var indexOfSelectedItem = selectedItems.indexOf(item);
            selectedItems.splice(indexOfSelectedItem, 1);
        }
        // console.log(selectedItems)
    };

    const reset = () => {
        selectedItems.splice(0, selectedItems.length);
        setValue(selectedItems);
    };
    const Details = () => {
        if (isOwner === true) {
            return (
                <>
                    <View style={styles.timecontainer}>
                        <Text style={styles.secondarytext}>Out Time:</Text>
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
                        <Text style={styles.secondarytext}>Return Time:</Text>
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
                        <Text style={styles.secondarytext}>Reason:</Text>
                        <TextInput
                            placeholder="Your reason"
                            style={styles.textbox}
                            onChangeText={(val) => reasonInputChange(val)}
                        ></TextInput>
                    </View>
                    <View style={styles.submitcontainer}>
                        <TouchableOpacity style={styles.submitButton}>
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </>
            );
        } else if (isBooked === true) {
            return (
                <>
                    <View
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 7,
                        }}
                    >
                        <Text style={styles.secondarytext}>
                            Have Something to report? Fill up the details below:
                        </Text>
                    </View>
                    <View style={{}}>
                        <View>
                            <View
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingHorizontal: 10,
                                    // padding: 20,
                                    marginBottom: 20,
                                    // maxWidth: "97%",
                                    // zIndex: 2,
                                }}
                            >
                                {/* <View
                                    style={{
                                        paddingBottom: 5,
                                        fontSize: 100,
                                        flexDirection: "row",
                                    }}
                                >
                                    
                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity
                                            onPress={reset}
                                            activeOpacity={0}
                                        >
                                            <Text
                                                style={{ textAlign: "right" }}
                                            >
                                                Reset
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View> */}

                                <DropDownPicker
                                    zIndex={3000}
                                    zIndexInverse={1000}
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    selectedItems={selectedItems}
                                    onOpen={setSelctedItems}
                                    placeholder="Select:"
                                    onSelectItem={addItem}
                                    theme="LIGHT"
                                    multiple={true}
                                    mode="BADGE"
                                    showBadgeDot={false}
                                    listMode="SCROLLVIEW"
                                />
                                <View style={styles.submitcontainer}>
                                    <TouchableOpacity
                                        style={styles.submitButton}
                                    >
                                        <Text>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </>
            );
        } else {
            return (
                <>
                    <View>
                        <Text>Book Now</Text>
                    </View>
                </>
            );
        }
    };
    // ************Description end****************

    return (
        <LinearGradient
            style={{ height: "100%" }}
            colors={["#2349cf", "#B79fe9"]}
        >
            <Animatable.View style={styles.container} animation="fadeInUpBig">
                <Image
                    source={require("../assets/cafe.png")}
                    style={styles.image}
                />
                <Text style={styles.maintext}>{seatName}</Text>
                <View style={styles.topcontainer}>
                    {/* <Text style={styles.secondarytext}>
                        This Seat has been booked by you!
                    </Text> */}
                    <SeatDescription />
                </View>

                <Text style={styles.maintext}>Details</Text>
                <View style={styles.bottomcontainer}>
                    <Details />
                </View>
            </Animatable.View>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        display: "flex",
        margin: 20,
    },
    image: {
        width: "100%",
        borderRadius: 15,
        height: 150,
        marginBottom: 10,
    },
    topcontainer: {
        margin: 10,
        minHeight: 60,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    bottomcontainer: {
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
    secondarytext: {
        fontSize: 17,
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
        borderRadius: 20,
        // backgroundColor: 'red',
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // width: 30
    },
    timetext: {
        marginLeft: 15,
        marginRight: 15,
    },
    reasoncontainer: {
        // backgroundColor:'red',
        display: "flex",
        flexDirection: "row",

        margin: 10,
        // flex: 'row'
        // alignItems: "baseline",
        justifyContent: "flex-start",
    },
    textbox: {
        marginLeft: 10,
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 10,
        minHeight: 100,
        minWidth: 250,
        // padding:20,
        paddingLeft: 10,
        paddingTop: 10,
        // display: "flex",
        // justifyContent: "baseline",
        // alignItems: "baseline",
        textAlignVertical: "top",
    },
    submitcontainer: {
        display: "flex",
        // justifyContent:'flex-end',
        alignItems: "flex-end",
        margin: 20,
    },
    submitButton: {
        // marginLeft: 10,
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: "grey",
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
    },
});
export default FacilityInformation;
