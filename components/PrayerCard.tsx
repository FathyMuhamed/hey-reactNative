import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const timeStringToTimestamp = (timeStr: string): number => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const today = new Date();
  today.setHours(hours, minutes, 0, 0);
  return Math.floor(today.getTime() / 1000);
};

export default function PrayerCard() {
  const { data, isLoading } = useQuery({
    queryKey: ["prayer-now"],
    queryFn: async () => {
      const response = await axios.get(
        `http://api.aladhan.com/v1/timingsByCity/${formatDate(new Date())}?city=cairo&country=Eg`
      );
      return response?.data?.data;
    },
  });

  if (isLoading) return <Text>loading.....</Text>;
  console.log("return", data);
  const prayerTimes = () => {
    const { timings } = data;
    const prayerTimeing = Object.entries(timings).map(([key, value]) => {
      return {
        key,
        value,
        timeStamp: timeStringToTimestamp(value as any),
      };
    });
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const nextPrayer = prayerTimeing.find(
      (prayer) => prayer.timeStamp > currentTime
    );
    return nextPrayer;
  };
  console.log(prayerTimes());

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
