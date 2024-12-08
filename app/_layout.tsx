import { AntDesign, Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Colors } from "../constants/Colors";

function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        tabBarInactiveTintColor: Colors.light.tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors.light.background,
          borderTopColor: Colors.light.tint,
        },
        tabBarIconStyle: {
          width: 35,
          height: 35,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Today",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Feather name="list" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="prayers"
        options={{
          headerShown: false,
          title: "Prayers",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="infocirlce" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          headerShown: false,
          title: "Live",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="laptop" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="doa"
        options={{
          headerShown: false,
          title: "Do'a",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default Layout;
