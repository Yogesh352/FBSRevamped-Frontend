import {React, useState} from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, TextInput, TextStyleProps, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function FacilityTypeDropdown(props) {
    const [open, setOpen] = useState(false);
    var [value, setValue] = useState(['seat', 'chatterbox', 'classroom', 'group study room', 'meeting pod', 'phone booth', 
                                            'project room', 'seminar room', ,'smuc facilities', 'study booth']);
    const [items, setItems] = useState([
      {label: 'Seat', value: 'seat'},
      {label: 'Chatterbox', value: 'chatterbox'},
      {label: 'Classroom', value: 'classroom'},
      {label: 'Group Study Room (GSR)', value: 'group study room'},
      {label: 'Meeting Pod', value: 'meeting pod'},
      {label: 'Phone Booth', value: 'phone booth'},
      {label: 'Project Room', value: 'project room'},
      {label: 'Seminar Room (SR)', value: 'seminar room'},
      {label: 'SMUC Facilities', value: 'smuc facilities'},
      {label: 'Study Booth', value: 'study booth'}
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
                    marginBottom: 5,
                    zIndex: 2
                    }}>
                    <View style={{
                        paddingBottom: 5,
                        fontSize: 100,
                        flexDirection: 'row'
                        }}>
                            <View style={{flex: 3}}>
                                <Text style={styles.plainText}>Facility Type</Text>
                            </View>
                            <View style={{flex: 1, paddingRight: 2}}>
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
                        placeholder="Select a facilty type"
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

export default FacilityTypeDropdown;