import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import FacilityTypeDropdown from '../components/Filter/FacilityTypeDropdown';
import LocationDropDown from '../components/Filter/LocationDropdown';

const FilterPage = ({ navigation }) => {
  let datesWhitelist = [{
    start: moment(),
    end: moment().add(14, 'days') // total 14 days included
  }];
  const [dateSelected, setDateChange] = React.useState('');
  const handleDateChange = (date) => {
      setDateChange(date);
      console.log(dateSelected)
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showStartTimePicker = () => {
      setDatePickerVisibility(true);
  };
  const hideStartTimePicker = () => {
      setDatePickerVisibility(false);
  };
  const showEndTimePicker = () => {
      setDatePickerVisibility(true);
  };
  const hideEndTimePicker = () => {
      setDatePickerVisibility(false);
  };
  const [startTimeSelected, setStartTimeChange] = React.useState('');
  const handleStartConfirm = (startTime) => {
      setStartTimeChange(startTime);
      console.log("A start time has been picked: ", startTime);
      hideStartTimePicker();
  };
  const [endTimeSelected, setEndTimeChange] = React.useState('');
  const handleEndConfirm = (endTime) => {
      setEndTimeChange(endTime);
      console.log("A end time has been picked: ", endTime);
      hideEndTimePicker();
  };

  const reset = () => {
      setStartTimeChange('');
      setEndTimeChange('');
  }
  return (
    <View style={{ padding: 10, flex: 1, justifyContent: "space-evenly" }}>
      <View style={{flex:1, minHeight: '100%', minWidth: '100%', marginTop:'50%'}}>
        <CalendarStrip
          scrollable
          style={{height:100, paddingTop: 20, paddingBottom: 10}}
          calendarColor={'#3343CE'}
          calendarHeaderStyle={{color: 'white'}}
          dateNumberStyle={{color: 'white'}}
          dateNameStyle={{color: 'white'}}
          disabledDateNameStyle={{color: '#D3D3D3'}}
          disabledDateNumberStyle={{color: '#D3D3D3'}}
          iconLeft={require('../assets/left-arrow.png')}
          iconRight={require('../assets/right-arrow.png')}
          iconContainer={{flex: 0.05}}
          datesWhitelist={datesWhitelist}
          onDateSelected={handleDateChange}
        />
        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <TouchableOpacity 
                    onPress={showStartTimePicker} 
                    style={styles.timeButton}
                    activeOpacity={0.7}>
                        <Text style={styles.timeText}>SELECT START TIME</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="time"
                    onConfirm={handleStartConfirm}
                    onCancel={hideStartTimePicker}
                />
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity 
                    onPress={showEndTimePicker} 
                    style={styles.timeButton}
                    activeOpacity={0.7}>
                        <Text style={styles.timeText}>SELECT END TIME</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="time"
                    onConfirm={handleEndConfirm}
                    onCancel={hideEndTimePicker}
                />
            </View>
        </View>

        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Text style={styles.selectedTime}>{JSON.stringify(startTimeSelected).substring(12, 17)}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.selectedTime}>{JSON.stringify(endTimeSelected).substring(12, 17)}</Text>
            </View>
        </View>
        
        <View style= {{ zIndex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            }}>
                <FacilityTypeDropdown/>
        </View>
        <View style= {{ zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 5
            }}>
                <LocationDropDown/>
        </View>

        <View style={{flexDirection: "row"}}>
            <View style={{flexDirection: "row", flex: 1}}></View>
            <View style={{flexDirection: "row", flex: 2}}>
                <View style={{flex: 1}}>
                    <TouchableOpacity 
                        onPress={reset} 
                        style={styles.resetButton}
                        activeOpacity={0.7}>
                            <Text style={styles.timeText}>RESET</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <TouchableOpacity 
                        // onPress={} 
                        style={styles.submitButton}
                        activeOpacity={0.7}>
                            <Text style={styles.timeText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
              </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
      flex: 1 
  },    
  background: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center"
  },
  loginButton: {
      width: '100%',
      height: 70,
      backgroundColor: '#2596be'
  },
  logoContainer:{
      position: 'absolute',
      top: 70,
      alignItems: "center"
  },
  timeText:{
      textAlign: 'center',
      fontWeight: '500',
      color: 'white',
  },
  timeButton: {
      width: '80%',
      backgroundColor: '#3343CE',
      padding: 10,
      marginHorizontal: 20,
      marginVertical: 20,
      borderRadius: 5
  },
  selectedTime:{
      fontSize: 40,
      textAlign: 'center',
      fontWeight: '500'
  },
  resetButton: {
      backgroundColor: '#B22222',
      width: '70%',
      padding: 10,
      marginHorizontal: 20,
      marginVertical: 50,
      borderRadius: 5
  },
  submitButton:{
      backgroundColor: '#3343CE',
      width: '70%',
      padding: 10,
      marginHorizontal: 20,
      marginVertical: 50,
      borderRadius: 5
  }
})

export default FilterPage;
