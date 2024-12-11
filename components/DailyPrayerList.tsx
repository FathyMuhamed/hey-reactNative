import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { DAILY_DOA_DATA } from "../constants/DailyDoaData";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// "https://mp3quran.net/api/v3/radios?language=ar&limit=5"

export function DailyPrayerList() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Daily Prayer</Text>
        <Link href="/prayers" asChild>
          <TouchableOpacity accessibilityRole="button" style={styles.button}>
            <Text style={styles.buttonText}>See All</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.itemContainer}>
        {Object.keys(DAILY_DOA_DATA)
          ?.slice(0, 6)
          ?.map((item, index) => {
            return (
              <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.7}
                onPress={() => console.log("press prayer")}
                key={index}
                style={styles.item}
              >
                <MaterialCommunityIcons
                  name="hands-pray"
                  size={24}
                  color="black"
                />
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
