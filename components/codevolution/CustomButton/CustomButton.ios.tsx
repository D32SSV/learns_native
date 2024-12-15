import { View, Button, StyleSheet } from "react-native";

export default function CustomButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <Button title={title} onPress={() => onPress()} color={"crimson"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    padding: 20,
    backgroundColor: "crimson",
  },
});
