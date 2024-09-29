import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl text-primary font-bold">Aura!</Text>
      <StatusBar style="auto"/>
      <Link href="/home" style={{color: 'blue'}}>Go to Home</Link>
    </View>
  )
}

export default App
