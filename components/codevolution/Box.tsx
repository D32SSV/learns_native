import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function Box({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={[styles.text]}>{children}</Text>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// Flex controls 3 properties flexBasis, flexGrow and flexShrink
export const styles = StyleSheet.create({
  box: {
    backgroundColor: "lightblue",
    padding: 3,
    height: windowHeight > 500 ? "70%" : "90%",
    width: windowWidth > 500 ? "60%" : "90%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    fontSize: windowHeight > 500 ? 45 : 85,
    fontWeight: "bold",
    textAlign: "center",
    color: "crimson",
  },
});
