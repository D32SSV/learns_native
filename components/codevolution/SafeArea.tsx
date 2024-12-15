import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";
import CustomButton from "./CustomButton/CustomButton";

export default function SafeArea() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Jai Shri Ram</Text>
          <CustomButton
            title={"Click Here"}
            onPress={() => console.log("Jai Shri Hari")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "navy",
  },
  container: {
    // flex: 1,
    // backgroundColor: "cream",
  },
  box: {
    padding: 60,
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    color: "crimson",
    ...Platform.select({
      ios: {
        color: "Pink",
      },
      android: {
        color: "lime",
      },
    }),
  },
});
