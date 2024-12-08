import { Pressable, Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/build/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

export function MainHeader() {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <FontAwesome6
            name="location-dot"
            size={24}
            color={Colors.light.icon}
          />
          <Text style={styles.locationText}>Unknown</Text>
        </View>
        <Feather name="search" size={24} color={Colors.light.icon} />
      </View>
      <View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <MaterialCommunityIcons
              name="hand-heart-outline"
              size={24}
              color={Colors.light.white}
            />
            <Text style={styles.cardText}>
              Start your day with these prayers
            </Text>
          </View>
          <Pressable
            hitSlop={16}
            onPress={() => console.log("press to go doa page")}
            style={({ pressed }) => [
              {
                transform: [{ translateX: pressed ? 5 : 0 }],
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            <Entypo name="chevron-with-circle-right" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  locationContainer: {
    gap: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 16,
    color: Colors.light.text,
    fontWeight: "500",
  },
  card: {
    backgroundColor: Colors.light.backgroundSecondary,
    padding: 16,
    borderRadius: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardContent: {
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
  },
  cardText: {
    fontSize: 18,
    color: Colors.light.white,
    fontWeight: "500",
  },
});
