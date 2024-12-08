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
import { HOME_RADIO_DATA } from "../constants/RadioData";

export function LiveStreamList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Live Radio</Text>
        <Link href="/live" asChild>
          <TouchableOpacity accessibilityRole="button" style={styles.button}>
            <Text style={styles.buttonText}>See All</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={HOME_RADIO_DATA}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.7} style={styles.itemContainer}>
            <Image
              style={styles.image}
              source={require("../assets/radio.jpg")}
            />
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
  itemContainer: {},
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
    marginBottom: 8,
  },
  itemText: {
    color: Colors.light.text,
    fontSize: 12,
    width: 80,
    fontWeight: "bold",
    textAlign: "center",
  },
});
