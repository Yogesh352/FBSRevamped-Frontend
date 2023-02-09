import {React, useState} from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, TextInput, TextStyleProps, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function LocationDropdown(props) {
    const [open, setOpen] = useState(false);
    var [value, setValue] = useState(['lkcsob', 'lks', 'soa', 'scis1', 'soe/scis2', 
                                            'soss/cis', 'connexion', ,'yphsl', 'kgc']);
    const [items, setItems] = useState([
      {label: 'Lee Kong Chian School of Business', value: 'lkcsob'},
      {label: 'Li Ka Shing Library', value: 'lks'},
      {label: 'School of Accountancy', value: 'soa'},
      {label: 'School of Computing & Information Systems 1', value: 'scis1'},
      {label: 'School of Economics/School of Computing & Information Systems 2', value: 'soe/scis2'},
      {label: 'School of Social Sciences/College of Integrative Studies', value: 'soss/cis'},
      {label: 'SMU Connexion', value: 'connexion'},
      {label: 'Yong Pung How School of Law', value: 'yphsl'},
      {label: 'Kwa Geok Choo Law Library', value: 'kgs'}
    ]);

    const [count, setCount] = useState(0);

    const [selectedItems, setSelectedItems] = useState([]);
    
    const setSelctedItems = () => {
        setCount(count + 1);
        if (count == 0){
            setValue(selectedItems);
        }
    }

    var addItem = (item) => {
        if (!selectedItems.includes(item)){
            setSelectedItems(selectedItems.concat([item]));
        }else{
            var indexOfSelectedItem = selectedItems.indexOf(item);
            selectedItems.splice(indexOfSelectedItem, 1);
        }
        // console.log(selectedItems)
    }

    const reset = () => {
        selectedItems.splice(0, selectedItems.length);
        setValue(selectedItems)
    }


    // console.log(selectedItems);

    return (
        <View>
            <View>
                <View style={{
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: 2,
                    maxWidth: '100%',
                    zIndex: 2
                    }}>
                    <View style={{
                        flexDirection: 'row'
                        }}>
                            <View style={{flex: 3}}>
                                <Text style={styles.titleText}>Location</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <TouchableOpacity 
                                    onPress={reset} 
                                    activeOpacity={0}>
                                        <Text style={styles.resetText}>Reset</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                    
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
                        placeholder="Select a location"
                        onSelectItem={addItem
                            }
                        style={{
                            backgroundColor: "white",
                            borderColor: 'white',
                            height: 60
                            }}

                
                        theme="LIGHT"
                        multiple={true}
                        mode="BADGE"
                        showBadgeDot={false}
                        listMode="SCROLLVIEW"
                    />
                </View>

            </View>
        </View>
        
      );
}

export default LocationDropdown;

const styles = StyleSheet.create({
    titleText: {
        fontWeight: "medium",
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: "white"
    },
    resetText: {
        fontWeight: "medium",
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: "white",
        textAlign: 'right'
    },
    content: {
        marginHorizontal: 16,
        borderRadius: 15,
        // shadowColor: 'black',
        // elevation: 20, 
        height: "85%",
        flexDirection: 'row',
        // backgroundColor: "#edeff0",
    },
})