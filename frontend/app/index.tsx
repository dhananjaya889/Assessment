import { View, Text } from "react-native";
import {Link} from 'expo-router'

const index = () => {
  return (
    <View>
      <Text className="text-5xl font-bold 
      text-green-700">index</Text>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/welcome">Welcome</Link>
    </View>
  );
};

export default index;