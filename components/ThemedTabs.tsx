import { Tabs } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";


export type ThemedTabsProps = {
    lightColor?: string;
    darkColor?: string;
    screenOptions?: any;
    children: React.ReactNode;
}
export function ThemedTabs({screenOptions, lightColor, darkColor, children, ...otherProps}: ThemedTabsProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        // Set the background color of the tab bar as the given theme color
        <Tabs 
        screenOptions={{
            ...screenOptions,
            tabBarStyle:{...screenOptions?.tabBarStyle, backgroundColor},
            }}
            {...otherProps}
        >
            {children} 
        </Tabs>

    )
}