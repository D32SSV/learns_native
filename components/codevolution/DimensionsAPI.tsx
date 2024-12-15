import { View, Text, StyleSheet, Dimensions } from "react-native";
import { styles } from "./Box";
import { useState, useEffect } from "react";

export default function DimensionsAPI() {
  const [dimension, setDimension] = useState({
    window: Dimensions.get("window"),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimension({ window });
    });
    return () => subscription?.remove();
  });

  let { window } = dimension;
  let windowWidth = window.width;
  let windowHeight = window.height;

  return (
    <View
      style={[
        styles.box,
        {
          height: windowHeight > 500 ? "70%" : "90%",
          width: windowWidth > 500 ? "60%" : "90%",
        },
      ]}
    >
      <Text style={{ fontSize: windowWidth > 500 ? 68 : 45 }}>
        Jai Shri Ram!
      </Text>
    </View>
  );
}

const currStyle = StyleSheet.create({
  innerBox: {
    backgroundColor: "lightblue",
    height: 200,
    width: 200,
  },
});
