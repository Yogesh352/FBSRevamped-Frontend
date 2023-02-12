
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
    <View style={{width: '100%', flexDirection: 'column', backgroundColor: '#1a2222', marginTop: 5}}>
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
          marginTop: 5
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
    <View style={{width: '100%', flex: 1, marginTop: '0%', backgroundColor: '#1a2222'}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row-reverse', padding: 4, backgroundColor: '#1a2222'}}>
          <TouchableOpacity
            onPress={() => setMultiSelect(!multiSelect)}>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                color: 'white',
                paddingTop: 10
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
  header: {
    backgroundColor: '#293637',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1a2222',
    margin: 1,
    height: 60,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'medium',
    textAlign: 'left',
    paddingLeft: 0,
    marginLeft: 0,
    color: 'white'
  },
//   separator: {
//     height: 0.5,
//     backgroundColor: '#000000',
//     width: '100%',
//   },
  text: {
    fontSize: 16,
    color: 'white',
    padding: 10,
  },
  content: {
    paddingLeft: 5,
    width: '97%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#293637',
    borderWidth: 0.5,
    borderBottomWidth: 0,
    borderColor: '#1a2222'
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