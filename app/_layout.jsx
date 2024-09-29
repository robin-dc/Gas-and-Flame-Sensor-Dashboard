import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { NativeWindStyleSheet } from "nativewind";
import { useFonts } from 'expo-font'

NativeWindStyleSheet.setOutput({
  default: "native",
});

SplashScreen.preventAutoHideAsync()
const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "SpaceMono": require("../assets/fonts/SpaceMono-Regular.ttf")
  })

  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
    </Stack>
  )
}

export default RootLayout
