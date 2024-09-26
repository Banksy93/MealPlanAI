import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                      <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    ),
                }} />
            <Tabs.Screen
                name="mealPlan"
                options={{
                    title: 'Your Plan',
                    tabBarIcon: ({ color, focused }) => (
                      <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
                    ),
                }} />
                <Tabs.Screen
                name="userProfile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                      <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
                    ),
                }} />
        </Tabs>
    )
}