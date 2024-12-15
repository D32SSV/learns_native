import { View, Text, StyleSheet, useWindowDimensions, } from "react-native";
import { styles } from "./Box";

export default function UseWindowDim() {
  
  let windowWidth = useWindowDimensions().width;
  let windowHeight = useWindowDimensions().height;

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
