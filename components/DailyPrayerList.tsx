import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { Colors } from "../constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

export function DailyPrayerList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Daily Prayer</Text>
        <Link href="/prayers" asChild>
          <TouchableOpacity accessibilityRole="button" style={styles.button}>
            <Text style={styles.buttonText}>See All</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.itemContainer}>
        {Array.from({ length: 6 })?.map((_, index) => (
          <TouchableOpacity
            accessibilityRole="button"
            activeOpacity={0.7}
            onPress={() => console.log("press prayer")}
            key={index}
            style={styles.item}
          >
            <FontAwesome6
              name="location-dot"
              size={24}
              color={Colors.light.text}
            />
            <Text style={styles.itemText}>Radio {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 32,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    padding: 10,
    backgroundColor: Colors.light.backgroundSecondary,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.light.white,
    fontWeight: "bold",
  },
  itemContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
  },
  item: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Colors.light.backgroundSecondary,
    borderRadius: 12,
    padding: 8,
    width: 120,
    gap: 8,
    alignItems: "center",
  },
  itemText: {
    color: Colors.light.text,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
