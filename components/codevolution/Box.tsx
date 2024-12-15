import { View, Text, StyleSheet } from "react-native";

export default function Box({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={[styles.text]}>{children}</Text>
    </View>
  );
}

// Flex controls 3 properties flexBasis, flexGrow and flexShrink
const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 3,
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
