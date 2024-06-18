import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image, Text, View, StyleSheet } from "react-native";
import Menus from "@/components/Menus";

export default function Index() {
  return (
    <ParallaxScrollView
      headerText="Ruokalistat"
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/food.png')}
        />
      }>
      <Menus />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    width: 100,
    height: 100,
  }
});
