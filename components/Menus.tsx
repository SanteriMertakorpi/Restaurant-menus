
import { Collapsible } from "./Collapsible";
import { ThemedText } from "./ThemedText";
import React, { useState, useEffect } from "react";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";

const urls = [
    {
    city: 'Joensuu',
    restaurants_fi: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=0417&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=0413&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=041704&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=0433&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=041702&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=041703&language=fi'],
    restaurants_en: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=0417&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=0413&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=041704&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=0433&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=041702&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=041703&language=en']
    },
    
    
    {
    city: 'Helsinki',
    restaurants_fi: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=1256&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=3003&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=3104&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=3406&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=3100&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=3067&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=1251&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=0083&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=3704&language=fi'],
    restaurants_en: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=1256&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=3003&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=3104&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=3406&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=3100&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=3067&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=1251&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=0083&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=3704&language=en']
    },
    {
    city: 'Kuopio',
    restaurants_fi: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=0442&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=0436&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=0437&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=0439&language=fi'],
    restaurants_en: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=0442&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=0436&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=0437&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=0439&language=en']
    },
    {
    city: 'Tampere',
    restaurants_fi: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=0815&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=0812&language=fi'],
    restaurants_en: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=0815&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=0812&language=en']
    },
    {
    city: 'Vaasa',
    restaurants_fi: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=3567&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=3597&language=fi'],
    restaurants_en: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=3567&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=3597&language=en']
    },
    {
    city: 'Espoo',
    restaurants_fi: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=3087&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=0190&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=3101&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=3292&language=fi',
                'https://www.compass-group.fi/menuapi/feed/json?costNumber=3208&language=fi'],
    restaurants_en: ['https://www.compass-group.fi/menuapi/feed/json?costNumber=3087&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=0190&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=3101&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=3292&language=en',
                    'https://www.compass-group.fi/menuapi/feed/json?costNumber=3208&language=en']
    }
]

interface MenuData {
    RestaurantName: string;
    RestaurantUrl: string;
    PriceHeader: any;  
    Footer: string;
    MenusForDays: Array<{
        Date: string;
        LunchTime: string;
        SetMenus: Array<{
            SortOrder: number;
            Name: string;
            Price: string;
            Components: string[];
        }>
    }>;
}
interface MenusProps {
    language: string;
}
const getMenusFromAPI = async (url: string): Promise<MenuData | null> =>{
    const response = await fetch(url);
    if( !response.ok ) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json() as MenuData;
    return data;
}
const Menus: React.FC<MenusProps> = ({ language}) => {
    
    return(
        <>
        {urls.map((city) => {
            return(
                <Collapsible title={city.city} key={city.city}>
                    {language === 'fi' ? (
                        city.restaurants_fi.map((restaurantUrl) => (
                            <RestaurantMenu key={restaurantUrl} url={restaurantUrl} />
                        ))
                    ) : language === 'en' ? (
                        city.restaurants_en.map((restaurantUrl) => (
                            <RestaurantMenu key={restaurantUrl} url={restaurantUrl} />
                        ))
                    ) : null}
                    
                </Collapsible>
            )
        })}
        </>
    )
}

const RestaurantMenu = ({url}: {url: string}) => {
    const [menu, setMenu] = useState<MenuData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const formatDate = (isoString: string): string =>{
        const date = new Date(isoString);
        return date.toLocaleDateString('fi-FI');
    
    }

    useEffect(() => {
        const fetchMenu = async () => {
            try{
                const data = await getMenusFromAPI(url);
                setMenu(data);
            } catch (err: any){
                setError(err.message);
            }
        };
        fetchMenu();
    }, [url]);

    if(error){
        return <ThemedText>{error}</ThemedText>
    }
    if(!menu){
        return <ThemedText>Loading...</ThemedText>
    }


    return(
        <Collapsible title={menu.RestaurantName}>
            {menu.MenusForDays.length === 0 ? <ThemedText>Ei lounasta tällä viikolla</ThemedText> 
            :  menu.MenusForDays.map((menuForDay) => (
                <ThemedView key={menuForDay.Date}>
                    <Collapsible title={formatDate(menuForDay.Date)}>
                        {menuForDay.LunchTime === null ? (
                            <ThemedText>Ei lounasta tänään</ThemedText>
                        ) : (
                            <>
                                <ThemedText style={styles.date}>{menuForDay.LunchTime}</ThemedText>
                                {menuForDay.SetMenus.map((setMenu) => (
                                    <ThemedView key={setMenu.SortOrder}>
                                        <ThemedText style={styles.menuName}>{setMenu.Name}</ThemedText>
                                        {setMenu.Components.map((component) => (
                                            <ThemedText key={component}>{component}</ThemedText>
                                        ))}
                                    </ThemedView>
                                ))}
                            </>
                        )}
                    
                    </Collapsible>
                        
                    
                </ThemedView>
            ))}
            
        </Collapsible>
    )
}

export default Menus;

const styles = StyleSheet.create({
    menuName:{
        fontWeight: 'bold',
        padding: 5
    },

    date:{
        fontWeight: 'bold',
        padding: 5
    }
})