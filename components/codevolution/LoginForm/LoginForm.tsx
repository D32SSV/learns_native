import { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function LoginForm() {
  const [credential, setCredential] = useState({ username: "", password: "" });
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <View style={styles.form}>
          <Image
            source={require("../../../assets/poke/pikachu.png")}
            style={styles.img}
          />
          <Text style={styles.label}>UserName</Text>
          <TextInput
            style={styles.input}
            placeholder="UserName"
            value={credential.username}
            onChangeText={(value) =>
              setCredential((prev) => ({ ...prev, username: value }))
            }
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={credential.password}
            onChangeText={(value) =>
              setCredential((prev) => ({ ...prev, password: value }))
            }
          />
          <Button title="Submit" onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "violet",
  },
  img: {
    marginBottom: 20,
    height: 80,
    width: 80,
    alignSelf: "center",
  },
  label: { fontSize: 16, fontWeight: 600, marginBottom: 10 },
  btn: { backgroundColor: "lightblue", borderRadius: 5 },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  form: {
    backgroundColor: "whitesmoke",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
