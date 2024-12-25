import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  Switch
} from "react-native";

export default function TextInputComp() {
  const [name, setName] = useState("");
  const [isDark, setIsDark] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="tinnu beta"
        // placeholderTextColor={""}
        secureTextEntry
        keyboardType={"default"}
        autoCapitalize="words"
        // autoCorrect={false}
      />
      <TextInput style={[styles.input, styles.multi]} placeholder="message min words 1000" multiline/>
      <Text style={styles.title}>My name is ::{name} {isDark.toString()}</Text>
      <Switch onChange={()=>{ 
        setName("Ram Ram Bhagat")
        setIsDark((prev)=>!prev)}} value={isDark}
        thumbColor={"red"}
        trackColor={{false:"lime", true:"black"}}/>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "smoke",
    paddingTop: StatusBar.currentHeight,
  },
  multi: { minHeight: 100, textAlignVertical:"top" },
  input: {
    height: 40,
    margin: 10,
    padding: 4,
    borderWidth: 2,
    backgroundColor: "white",
  },
  title: { fontSize: 20, fontWeight: "700", color: "green" },
  box: { width: 300, height: 300, marginBottom: 50, padding: 20 },
  boxBgNavy: { backgroundColor: "navy" },
  boxBgCrimson: { backgroundColor: "crimson", color: "goldenrod" },
});
