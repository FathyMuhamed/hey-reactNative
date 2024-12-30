import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useQuery } from "@tanstack/react-query";
import { convertTo12Hour, timeStringToTimestamp } from "../utils/Date";
import { prayerTimingQueryOptions } from "../api/prayerApi";

export default function PrayerCard() {
  const { data, isLoading } = useQuery(prayerTimingQueryOptions());

  if (isLoading) return <Text>loading.....</Text>;

  const prayerTimes = () => {
    const { timings } = data;
    const prayerTimeing = Object.entries(timings).map(([key, value]) => {
      return {
        name: key,
        time: value as string,
        timeStamp: timeStringToTimestamp(value as any),
      };
    });
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const nextPrayer = prayerTimeing.find(
      (prayer) => prayer.timeStamp > currentTime
    );
    return {
      name: nextPrayer?.name ?? "unknown",
      time: nextPrayer?.time ?? "unknown",
    };
  };

  if (!data)
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );

  const { name, time } = prayerTimes();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/mosque.jpg")} />
      <View style={styles.overlay}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{convertTo12Hour(time)}</Text>
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
    top: "15%",
    left: "5%",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 6,
    padding: 8,
  },
  text: {
    color: Colors.light.white,
    fontWeight: "bold",
    fontSize: 24,
  },
});
