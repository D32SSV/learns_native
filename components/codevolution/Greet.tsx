import { View, Text, StyleSheet } from "react-native";

export default function Greet({ name }) {
  return (
    <View style={{ flex: 1, backgroundColor: "lime" }}>
      <Text style={style.title}>Kya baat hai bhai, {name} ?</Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: { fontSize: 50, fontWeight: "700", color:"green" },
});
