import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  const handleSignUp = () => {
    if (!validatePassword(password)) {
      Alert.alert("Invalid Password", "Password must contain one lowercase character, one uppercase character, one symbol, one number, and be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match", "Please ensure that both passwords match.");
      return;
    }
    Alert.alert("Sign Up Successful", "See you on my Instagram if you have questions: must_ait6");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <View style={styles.inputView}>
        <TextInput 
          style={styles.input} 
          placeholder='Name' 
          value={name} 
          onChangeText={setName} 
          autoCorrect={false}
          autoCapitalize='none' 
        />
        <TextInput 
          style={styles.input} 
          placeholder='Email Address' 
          value={email} 
          onChangeText={setEmail} 
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
        <TextInput 
          style={styles.input} 
          placeholder='Confirm Password' 
          secureTextEntry 
          value={confirmPassword} 
          onChangeText={setConfirmPassword} 
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
        <Pressable style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
      <Text style={styles.footerText}>Have an Account? <Link href="/login" style={styles.signup}>Sign In</Link></Text>
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
    flexDirection: "row",
    marginBottom: 8
  },
  forgetText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "Inter",
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
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23
  },
  signup: {
    color: "#FFD482",
    fontSize: 15,
    fontFamily: "Inter"
  }
});
