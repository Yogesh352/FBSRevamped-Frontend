import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Svg, {
  Circle,
  Ellipse,
  G,
  Rect,
  SvgXml,
  Text,
  TSpan,
} from "react-native-svg";

import { DetailedMapCoordinatesData } from "./DetailedMapCoordinates";
const DetailedMapLayout = () => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingRight: 10,
        paddingLeft: 10,
      }}
    >
      <Svg height="100%" width="100%" viewBox="0 25 100 100">
        {DetailedMapCoordinatesData.map((CoordinatesData) => {
          return (
            <G
              key={CoordinatesData.rectangle?.x + CoordinatesData.rectangle?.y}
            >
              {CoordinatesData.circle && (
                <Circle
                  stroke="#e9e8ea"
                  strokeWidth="0.5"
                  fill={CoordinatesData.circle.color}
                  cx={CoordinatesData.circle.cx / 2}
                  cy={CoordinatesData.circle.cy / 2}
                  r={CoordinatesData.circle.radius}
                />
              )}
              {CoordinatesData.text && (
                <Text
                  key={CoordinatesData.text.x + CoordinatesData.text.y}
                  x={CoordinatesData.text.x}
                  y={CoordinatesData.text.y}
                  textAnchor="middle"
                  // fill="#5A5A5A"
                  fill="#e9e8ea"
                  fontSize="5"
                  fontWeight="bold"
                  fontFamily="Roboto"
                >
                  {CoordinatesData.text.output}
                </Text>
              )}
              {CoordinatesData.ellipse && (
                <Ellipse
                  stroke="#e9e8ea"
                  strokeWidth="0.5"
                  fill={CoordinatesData.ellipse.color}
                  cx={CoordinatesData.ellipse.cx / 2}
                  cy={CoordinatesData.ellipse.cy / 2}
                  rx={CoordinatesData.ellipse.rx}
                  ry={CoordinatesData.ellipse.ry}
                />
              )}
              {CoordinatesData.rectangle && (
                <Rect
                  stroke="#e9e8ea"
                  strokeWidth="0.5"
                  key={
                    CoordinatesData.rectangle.x + CoordinatesData.rectangle.y
                  }
                  x={CoordinatesData.rectangle.x}
                  y={CoordinatesData.rectangle.y}
                  height={CoordinatesData.rectangle.height}
                  width={CoordinatesData.rectangle.width}
                  //   stroke="#e9e8ea"
                  //   strokeWidth="0.5"
                  fill={
                    CoordinatesData.rectangle.color
                      ? CoordinatesData.rectangle.color
                      : "white"
                  }
                  rx={2}
                />
              )}
            </G>
          );
        })}
      </Svg>
    </View>
  );
};

export default DetailedMapLayout;
