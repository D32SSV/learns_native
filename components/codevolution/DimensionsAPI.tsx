import { View, Text, StyleSheet } from "react-native";
import { styles } from "./Box";

export default function DimensionsAPI() {
  return (
    
      <View style={styles.box}>
        <Text style={styles.text}>Jai Shri Ram!</Text>
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
