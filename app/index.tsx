import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image, Text, View, StyleSheet } from "react-native";
import Menus from "@/components/Menus";
import { ThemeProvider } from "@/context/themeContext";
import { useState } from "react";

export default function Index() {
  const [language, setLanguage] = useState('fi');
  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'fi' ? 'en' : 'fi'));
  }
  return (
    <ThemeProvider>
      <ParallaxScrollView
        headerText="Ruokalistat"
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/food.png')}
          />
        }
        changeLanguage={changeLanguage}
        language={language}>
        <Menus language={language} />

      </ParallaxScrollView>
    </ThemeProvider>
    
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    width: 100,
    height: 100,
  }
});
