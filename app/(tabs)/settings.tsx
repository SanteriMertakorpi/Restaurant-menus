import { View,StyleSheet, Button, Switch } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import React, { useState, PropsWithChildren } from "react";
import { RadioButton } from 'react-native-paper';
import { useTheme } from "@/context/themeContext";


export default function Settings() {
    const {theme, toggleTheme, language, changeLanguage} = useTheme();
    return (
        <ThemedView style={styles.container}>
                <ThemedView style={styles.content}>
                    <ThemedText style={styles.head}>Settings</ThemedText>
                    <View style={styles.buttonsContainer}>
                        <ThemedText>Dark mode</ThemedText>
                        <Switch onValueChange={toggleTheme}
                            value={theme === 'dark'} />
                        <ThemedText>Finnish</ThemedText>
                        <RadioButton.Android
                            value = 'finnish'
                            status={language === 'fi' ? 'checked' : 'unchecked'}
                            onPress={()=>changeLanguage('fi')}
                        />
                        <ThemedText>English</ThemedText>
                        <RadioButton.Android
                            value = 'english'
                            status={language === 'en' ? 'checked' : 'unchecked'}
                            onPress={()=>changeLanguage('en')}
                        />
                    </View>
                </ThemedView>
            
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    buttonsContainer: {
        
        alignItems: 'center', // Add this line
        
    },
    head:{
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        marginBottom: 20,
    }
})
