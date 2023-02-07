import React, { Component, useRef } from 'react';
<<<<<<< HEAD
import { Button, View, Text, StyleSheet, Dimensions, Image } from "react-native";
=======
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
>>>>>>> refs/remotes/origin/Homepage
import { LinearGradient } from "expo-linear-gradient";
import Ionic from "react-native-vector-icons/Ionicons";
import Carousel, { Pagination } from 'react-native-snap-carousel'

// generate 2 mocked bookings
const dates = [];   
for (var i = 0; i < 2; i++) {
    dates.push(randomDate(new Date(2020), new Date()));
}
// generate random date
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// array of days
const days = [
    'Sun',    
    'Mon',
    'Tues',
    'Wed',
    'Thurs',
    'Fri',
    'Sat'
];
// array of months
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(hours) {
    if (hours > 11 && hours < 24) {
        return (hours % 12 == 0) ?  "12pm" : (hours % 12) + "pm";
<<<<<<< HEAD
    } else {
=======
    } else if (hours % 12 != 0) {
>>>>>>> refs/remotes/origin/Homepage
        return (hours % 12 == 0) ?  "12am" : (hours % 12) + "am";
    }
}

function Booking(props) {
    return (
        <View style={styles.box}>
            <View style={styles.dateBorder}>
                <Text style={styles.date}>
                    <Text style={styles.day}> {days[dates[0].getDay()]} {'\n'} </Text>
                    {dates[0].getDate()} {months[dates[0].getMonth()]}
                </Text>
            </View>
            <View style={styles.timeBorder}>
                <Text style={styles.timeVenue}> 
                    <Text style={styles.time}>{formatDate(dates[0].getHours())} - {formatDate(dates[1].getHours())} {'\n'}</Text>
                    SCIS1 Seminar Room 3-1
                </Text>
            </View>
            <Ionic
                name='location'
                size={40}
<<<<<<< HEAD
                color="#8849cf"
=======
                color="#2349cf"
>>>>>>> refs/remotes/origin/Homepage
                style={styles.checkInButton}
            />
        </View>
    )
} 

const data = [
    {
<<<<<<< HEAD
        title: "School of Computing",
        body: "Seminar Room 3-1",
        imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
        title: "School of Accountancy",
        body: "Group Study Room 2-11",
        imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
        title: "School of Law",
        body: "Classroom B1-1",
=======
        title: "Aenean leo",
        body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
        title: "In turpis",
        body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
        title: "Lorem Ipsum",
        body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
>>>>>>> refs/remotes/origin/Homepage
        imgUrl: "https://picsum.photos/id/12/200/300",
    },
];


<<<<<<< HEAD
const SLIDER_WIDTH = Dimensions.get('window').width * 0.93;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.92);
=======
const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
>>>>>>> refs/remotes/origin/Homepage

const CarouselCardItem = ({ item, index }) => {
    return (
      <View style={styles.container} key={index}>
        <Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
        />
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    )
}

const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
  
    return (
      <View>
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
    )
}

const ActualHome = () => {
    const [index, setIndex] = React.useState(0);

    return (
        <View>
            <LinearGradient style={{ height: "100%" }} colors={["#2349cf", "#B79fe9"]}>
                <View style={styles.content}>
                    <Text style={styles.titleText}> Upcoming Bookings </Text>
                    <Booking/>
                    <Booking/>

                    <Text style={styles.titleText}> Favourites </Text>
                    <CarouselCards />
<<<<<<< HEAD

                    <Text style={styles.titleText}> Instant Seating </Text>
                    <Image 
                        source={require('../assets/cafe.png')}
                        style={styles.findMeSeatButton}
                        />
                    <Text style={styles.findMeASeatText}> Find Me A Seat </Text>  
=======
>>>>>>> refs/remotes/origin/Homepage
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        margin: 16,
        borderRadius: 15,
        // shadowColor: 'black',
        // elevation: 20, 
        height: "85%",
        // backgroundColor: "#edeff0",
    },
    titleText: {
        fontWeight: "medium",
        fontSize: 20,
<<<<<<< HEAD
        paddingHorizontal: 10,
        paddingVertical: 5,
=======
        padding: 10,
>>>>>>> refs/remotes/origin/Homepage
        color: "white"
    },
    box: {
        height: 60,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: "row",
    },
    dateBorder: {
        width: 80,
        height: 60,
        borderRightWidth: 1,
        // flex: 1
    },
    date: {
        padding: 8,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'medium',
        color: "purple"
    },
    day: {
        fontWeight: 'bold',
    },
    timeBorder: {
        width: "60%",
    },
    time: {
        fontWeight: 'bold',
    },
    timeVenue: {
        textAlign: "left",
        marginHorizontal: 12,
        marginVertical: 8,
        fontSize: 16,
        fontWeight: 'medium',
        color: "#2349cf",
    },
    checkInButton: {
        margin: 8
    },

    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
<<<<<<< HEAD
        paddingBottom: 15,
=======
        paddingBottom: 40,
>>>>>>> refs/remotes/origin/Homepage
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      },
      image: {
        width: ITEM_WIDTH,
<<<<<<< HEAD
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      },
      header: {
        color: "#222",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 10
      },
      body: {
        color: "#222",
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20
      },
      findMeSeatButton: {
          color: "white",
          marginLeft: 12,
          height: 100,
          width: "93%",
          borderRadius: 8
      },
      findMeASeatText: {
          marginTop: -44,
          marginLeft: "56%",
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
=======
        height: 300,
      },
      header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
      },
      body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
>>>>>>> refs/remotes/origin/Homepage
      }
})

export default ActualHome
