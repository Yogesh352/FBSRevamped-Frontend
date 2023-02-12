import { Button, Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import { useIsFocused } from "@react-navigation/native";

//npm install react-native-camera --save
//npm install react-native-qrcode-scanner --save
//npm install react-native-permissions --save
// import QRCodeScanner from 'react-native-qrcode-scanner';

// expo start --tunnel
const Scanning = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet scanned");
    const isFocused = useIsFocused();

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
        navigation.navigate("FacilityInfo");
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
            {/* <View style={styles.instruction}>
                    <Text style={styles.maintext}>Scan QR code below:</Text>
                </View> */}

            <View style={styles.barcodebox}>
                {isFocused && (
                    <BarCodeScanner
                        onBarCodeScanned={handleQRCodescanned}
                        style={styles.barcodescanner}
                    >
                        <BarcodeMask
                            edgeColor={"lightgrey"}
                            showAnimatedLine={true}
                            // edgeRadius={15}
                            outerMaskOpacity={0.1}
                            edgeBorderWidth={3}
                            height={300}
                            width={300}
                            // edgeHeight={25}
                            // edgeWidth={25}
                            lineAnimationDuration={1000}
                            style={styles.mask}
                        ></BarcodeMask>

                        {/* <QrCodeMask
                        showLineAnimated={true}
                        lineDirection="vertical"
                        height={300}
                        width={300}
                        edgeColor="light-grey"
                        overlayOpacity={0.1}
                        // lineBorderRadius = {100}
                        lineThick={3}
                        lineColor="light-grey"
                        edgeBorderWidth={3}
                        // topTitle="Bar Code Scanner"
                        // bottomTitle="Put the barcode into the box"
                    /> */}
                    </BarCodeScanner>
                )}
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
        backgroundColor: "#1a2222",
    },
    instruction: {
        // flex:1,
        // backgroundColor:'grey',
        paddingBottom: 20,
    },
    maintext: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    barcodebox: {
        // flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: "50%",
        width: "90%",
        overflow: "hidden",
        borderRadius: 20,
        marginTop: 150,
        // backgroudColor: 'tomato'
    },
    barcodescanner: {
        height: 500,
        width: 500,
    },
    mask: {
        padding: 10,
        margin: 10,
    },
});

export default Scanning;
