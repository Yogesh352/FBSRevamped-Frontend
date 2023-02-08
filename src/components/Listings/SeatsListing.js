
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ExpandableComponent = ({item, onClickFunction}) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View style={{width: '100%', flexDirection: 'column'}}>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <Text style={styles.headerText}>
          {item.category_name}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            // edit to go to new page
            onPress={
              () => alert('Id: ' + item.id + ' val: ' + item.val)
          }>
            <Text style={styles.text}>
              {item.val}
            </Text>
            {/* <View style={styles.separator} /> */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const SeatsListing = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] =
             !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      );
    }
    setListDataSource(array);
  };

  return (
    <View style={{width: '97%', flex: 1, marginTop: '20%'}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text style={styles.titleText}>Facilities</Text>
          <TouchableOpacity
            onPress={() => setMultiSelect(!multiSelect)}>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              {multiSelect
                ? 'Single Expand'
                : 'Multiple Expand'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default SeatsListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#B774FF',
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    margin: 1
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
//   separator: {
//     height: 0.5,
//     backgroundColor: '#000000',
//     width: '100%',
//   },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    width: '98%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2ADFE',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: 'black',
  },
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Li Ka Shing Library',
    subcategory: [
      {id: 'LKS2', val: 'Level 2'},
      {id: 'LKS3', val: 'Level 3'},
      {id: 'LKS4', val: 'Level 4'},
      {id: 'LKS5', val: 'Level 5'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Kwa Geok Choo Law Library',
    subcategory: [
      {id: 'KGC4', val: 'Level 4'},
      {id: 'KGC5', val: 'Level 5'},
      {id: 'KGC6', val: 'Level 6'},
    ],
  },
];