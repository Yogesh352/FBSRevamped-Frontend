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
      }}
    >
      <Svg height="140%" width="100%" viewBox="0 20 100 100">
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
                  stroke="black"
                  strokeWidth="0.5"
                  fill="#d3d3d3"
                />
              )}
              {CoordinatesData.text && (
                <Text
                  key={CoordinatesData.text.x + CoordinatesData.text.y}
                  x={CoordinatesData.text.x}
                  y={CoordinatesData.text.y}
                  textAnchor="middle"
                  fill="black"
                  fontSize="5"
                  fontWeight="bold"
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
