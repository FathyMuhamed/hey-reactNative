import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

export default function PrayerCard() {
  return (
    <View
      style={{
        backgroundColor: "red",
        borderRadius: 12,
        marginVertical: 16,
        height: 200,
        width: "100%",
        position: "relative",
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 12,
          objectFit: "cover",
          justifyContent: "center",
          alignItems: "center",
        }}
        source={{
          uri: "https://placehold.co/200/546518/ffffff/png",
          scale: 1,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
        }}
      >
        <Text
          style={{
            color: Colors.light.white,
          }}
        >
          PrayerCard
        </Text>
        <Text
          style={{
            color: Colors.light.white,
          }}
        >
          PrayerCard
        </Text>
      </View>
    </View>
  );
}
