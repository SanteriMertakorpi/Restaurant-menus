import { Tabs } from "expo-router";
import { ThemeProvider } from "@/context/themeContext";
import { ThemedTabs } from "@/components/ThemedTabs";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function RootLayout() {
  
  return (
    <ThemeProvider>
        <ThemedTabs>
          <Tabs.Screen name="(tabs)/index" options={
            {
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}  />
              )
            }
          }
          />
          <Tabs.Screen name = "(tabs)/settings" options={
            {
              title: 'Settings',
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color}  />
              )
            }
          } 
          />
        </ThemedTabs>
    </ThemeProvider>
      
  );
}
