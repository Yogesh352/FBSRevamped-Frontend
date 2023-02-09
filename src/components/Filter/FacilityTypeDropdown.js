import {React, useState} from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, TextInput, TextStyleProps, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function FacilityTypeDropdown(props) {
    const [open, setOpen] = useState(false);
    var [value, setValue] = useState(['chatterbox', 'classroom', 'group study room', 'meeting pod', 'phone booth', 
                                            'project room', 'seminar room', ,'smuc facilities', 'study booth']);
    const [items, setItems] = useState([
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
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 1,
                    paddingLeft: 2,
                    maxWidth: '100%',
                    zIndex: 2
                    }}>
                    <View style={{
                        flexDirection: 'row'
                        }}>
                            <View style={{flex: 3}}>
                                <Text style={styles.titleText}>Facility Type</Text>
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
                        placeholder="Select a facilty type"
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

export default FacilityTypeDropdown;

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

