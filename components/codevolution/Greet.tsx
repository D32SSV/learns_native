import { View, Text } from "react-native";

export default function Greet({ name }) {
  return (
    <View style={{ flex: 1, backgroundColor: "goldenrod" }}>
      <Text>Kya baat hai bhai, {name} ?</Text>
    </View>
  );
}
