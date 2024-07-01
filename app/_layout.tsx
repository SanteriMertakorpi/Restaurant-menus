import { Stack } from "expo-router";
import {Colors} from "@/constants/Colors";
import { useColorScheme } from "react-native";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={
        {
          title: 'Home',
          headerShown: false,
        }
      }/>
    </Stack>
  );
}
