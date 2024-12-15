import { View, Text, StyleSheet } from "react-native";

//multiple style using array syntax
export default function MultiStyleBox({ name1, name2 }) {
  return (
    <View style={style.container}>
      <Text style={[style.title, style.box, style.boxBgNavy]}>
        Kya baat hai bhai, {name1} ?
      </Text>
      <Text style={[style.title, style.box, style.boxBgCrimson]}>
        Kya baat hai bhai, {name2} ?
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "lime" },
  title: { fontSize: 20, fontWeight: "700", color: "green" },
  box: { width: 300, height: 300, marginBottom: 50, padding: 20 },
  boxBgNavy: { backgroundColor: "navy" },
  boxBgCrimson: { backgroundColor: "crimson", color: "goldenrod" },
});
