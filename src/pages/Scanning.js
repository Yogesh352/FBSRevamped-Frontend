import { Button, Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
// import { Icon } from "@iconify/react";
import Icon from 'react-native-vector-icons/FontAwesome';

// expo start --tunnel
const ScanningPage = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet scanned");

    const askForCamerPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == "granted");
        })();
    };

    //Request Camera Permission
    useEffect(() => {
        askForCamerPermission();
        // setScanned(false);
    }, []);

    //What happens when we scan qr code
    const handleQRCodescanned = ({ type, data }) => {
        setScanned(true);
        // setText(data);
        // console.log("Type: " + type + "\nData: " + data);
        navigation.navigate('FacilityInfo');
    };

    if (hasPermission === false) {
        return (
            <View styles={styles.container}>
                <Text styles={styles.maintext}>No access to camera</Text>
                <Button
                    title={"Allow Camera"}
                    onPress={() => askForCamerPermission}
                ></Button>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.instruction}>
                <Text style={styles.maintext}>Scan QR code below:</Text>
            </View>
            
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleQRCodescanned}
                    style={styles.barcodescanner}
                >
                    
                </BarCodeScanner>
            </View>
            {/* <Text styles={styles.maintext}>{text}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "tomato",
    },
    instruction: {
        // flex:1,
        // backgroundColor:'grey',
        paddingBottom: 20,
    },
    maintext: {
        fontSize: 20,
        fontWeight: "bold",
        // color: 'red',
    },
    barcodebox: {
        // flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: "70%",
        width: "90%",
        overflow: "hidden",
        borderRadius: 30,

        // backgroudColor: 'tomato'
    },
    barcodescanner: {
        height: 1000,
        width: 500,
    },
});

export default ScanningPage;
