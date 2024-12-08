import { Pressable, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/build/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

export function HomeCard() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginVertical: 16,
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
        <Feather name="search" size={24} color={Colors.light.icon} />
      </View>
      <View>
        <View
          style={{
            backgroundColor: Colors.light.backgroundSecondary,
            padding: 16,
            borderRadius: 16,
            marginHorizontal: 16,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              alignItems: "center",
              gap: 8,
              flexDirection: "row",
            }}
          >
            <MaterialCommunityIcons
              name="hand-heart-outline"
              size={24}
              color={Colors.light.white}
            />
            <Text
              style={{
                fontSize: 18,
                color: Colors.light.white,
                fontWeight: "500",
              }}
            >
              Start your day with these prayers
            </Text>
          </View>
          <Pressable
            hitSlop={16}
            onPress={() => console.log("press to go doa page")}
            style={({ pressed }) => ({
              transform: [{ translateX: pressed ? 5 : 0 }],
              opacity: pressed ? 0.7 : 1,
            })}
          >
            <Entypo name="chevron-with-circle-right" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
