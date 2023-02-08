import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import floorplanData from "../Data/floorplan-data.json";
import Svg, { G, Rect, SvgXml, Text, TSpan } from "react-native-svg";
import { CoordinatesData } from "./CoordinatesData";
const MockLayout = () => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10,
      }}
    >
      <Svg height="90%" width="100%" viewBox="0 0 100 100">
        {CoordinatesData.map((CoordinatesData) => {
          return (
            <G
              key={CoordinatesData.rectangle?.x + CoordinatesData.rectangle?.y}
            >
              {CoordinatesData.rectangle && (
                <Rect
                  key={
                    CoordinatesData.rectangle.x + CoordinatesData.rectangle.y
                  }
                  x={CoordinatesData.rectangle.x}
                  y={CoordinatesData.rectangle.y}
                  height={CoordinatesData.rectangle.height}
                  width={CoordinatesData.rectangle.width}
                  stroke="grey"
                  strokeWidth="0.5"
                  fill={
                    CoordinatesData.rectangle.color
                      ? CoordinatesData.rectangle.color
                      : "white"
                  }
                />
              )}
              {CoordinatesData.text && (
                <Text
                  key={CoordinatesData.text.x + CoordinatesData.text.y}
                  x={CoordinatesData.text.x}
                  y={CoordinatesData.text.y}
                  textAnchor="middle"
                  fill="#5A5A5A"
                  fontSize="5"
                  fontWeight="bold"
                  fontFamily="Roboto"
                >
                  {CoordinatesData.text.output}
                </Text>
              )}
            </G>
          );
        })}
      </Svg>
    </View>
  );
};

export default MockLayout;
