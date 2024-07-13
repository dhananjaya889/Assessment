import React, { useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize='none'
        />
      </View>
      <View style={styles.rememberView}>
        <View>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!", "see you in my instagram if you have questions: must_ait6")}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
      <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}> Sign Up</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#2A2A2A"
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: 100,
    lineHeight: 29.05,
    color: "#FFFFFF"
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#3D3D3D",
    color: "#FFFFFF",
    borderWidth: 3,
    borderRadius: 10,
    shadowColor: "5%"
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8
  },
  forgetText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "Inter"
  },
  button: {
    backgroundColor: "#FFD482",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontFamily: "Inter",
    fontWeight: "bold"
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Inter"
  },
  signup: {
    color: "#FFD482",
    fontSize: 15,
    fontFamily: "Inter"
  }
})
