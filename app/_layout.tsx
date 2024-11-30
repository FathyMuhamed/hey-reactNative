import { AntDesign, Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "home screen",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "about screen",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="infocirlce" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "idea screen",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="laptop" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default Layout;
