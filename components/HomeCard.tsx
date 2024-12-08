import { Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/build/Feather";

export function HomeCard() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            gap: 6,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome6
            name="location-dot"
            size={24}
            color={Colors.light.icon}
          />
          <Text
            style={{
              fontSize: 16,
              color: Colors.light.text,
              fontWeight: "500",
            }}
          >
            Unknown
          </Text>
        </View>
        <Feather name="search" size={26} color={Colors.light.icon} />
      </View>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </View>
  );
}
