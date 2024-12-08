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
        data={Array.from({ length: 5 })}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ index }) => (
          <View style={styles.itemContainer}>
            <Image
              style={styles.image}
              source={{ uri: "https://placehold.co/80/546518/ffffff/png" }}
            />
            <Text style={styles.itemText}>Radio {index + 1}</Text>
          </View>
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
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});