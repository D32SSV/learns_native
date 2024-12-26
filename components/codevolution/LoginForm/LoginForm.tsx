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
  const [err, setErr] = useState({ msg: "" });

  const validateFormData = () => {
    let err = {};
    if (!credential.username || !credential.password) {
      err.msg = "All Fields are required";
    }
    setErr(err);
    return Object.keys(err).length === 0;
  };
  const handleSubmit = () => {
    if (validateFormData()) {
      console.log("submitted, credentials: ", credential);
      setCredential({ username: "", password: "" });
      setErr({ msg: "" });
    }
  };
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
          {err.msg ? <Text style={styles.err}>{err.msg}</Text> : null}
          <Button
            title="Submit"
            onPress={() => {
              handleSubmit();
            }}
          />
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
  err: { color: "red", marginBottom: 10 },
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
