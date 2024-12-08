import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
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
            return <Ionicons name="today" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="prayers"
        options={{
          headerShown: false,
          title: "Prayers",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="hands-pray"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          headerShown: false,
          title: "Live",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="radio" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="doa"
        options={{
          headerShown: false,
          title: "Do'a",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alarm" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings-suggest" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default Layout;
