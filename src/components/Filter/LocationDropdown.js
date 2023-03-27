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
                    backgroundColor: '#1a2222',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: '100%',
                    zIndex: 2
                    }}>
                    <View style={{
                        paddingBottom: 5,
                        fontSize: 100,
                        flexDirection: 'row'
                        }}>
                            <View style={{flex: 3}}>
                                <Text style={styles.plainText}>Location</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <TouchableOpacity 
                                    onPress={reset} 
                                    activeOpacity={0}>
                                        <Text style={styles.reset}>Reset</Text>
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

                
                        theme="DARK"
                        multiple={true}
                        mode="BADGE"
                        showBadgeDot={false}
                        listMode="SCROLLVIEW"
                        style={styles.dropdown}
                    />
                </View>

            </View>
        </View>
        
      );
}

const styles = StyleSheet.create({
    reset: {
        color: '#657384',
        textAlign: 'right',
        fontSize: 15
    },
    plainText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#94c0db",
        paddingLeft: 2
    },
    dropdown: {
        backgroundColor: '#293637'
    }
})

export default LocationDropdown;