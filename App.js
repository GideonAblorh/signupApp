import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
              <Text style={styles.loginText}> Sign Up </Text>
          </View>
      <View>
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry={true}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry={true}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry={true}
          placeholder="Password again"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}> Sign Up </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.noAccountContainer}>
        <Text style={styles.noAccountText}> You already have an account?</Text>
        <Text style={styles.Login}> Log In</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    // alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 40,
    color: "#5100ad",
  },
  signupContainer: {
    marginBottom: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height: 50,
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: "#5100ad",
    justifyContent: "center",
    height: 50,
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 50,
  },
  // buttonText: {
  //   color: "#fff",
  //   fontSize: 25,
  //   borderRadius: 20,
  // },
  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  Login:{
    color: "#5100ad",
  }
});
