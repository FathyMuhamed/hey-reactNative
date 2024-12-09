import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

export default function PrayerCard() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/mosque.jpg")} />
      <View style={styles.overlay}>
        <Text style={styles.text}>PrayerCard</Text>
        <Text style={styles.text}>PrayerCard</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginVertical: 16,
    height: 200,
    width: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    objectFit: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: "35%",
    left: "5%",
  },
  text: {
    color: Colors.light.text,
    fontWeight: "bold",
    fontSize: 18,
  },
});
