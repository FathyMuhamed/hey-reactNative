import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Colors } from "../constants/Colors";
import { Link } from "expo-router";
import React from "react";

export function LiveStreamList() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
          marginTop: 32,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Live Radio
        </Text>
        <Link href="/live" asChild>
          <TouchableOpacity
            accessibilityRole="button"
            style={{
              padding: 10,
              backgroundColor: Colors.light.backgroundSecondary,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: Colors.light.white,
                fontWeight: "bold",
              }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Array.from({ length: 5 })}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ index }) => (
          <View style={{}}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                marginRight: 12,
                marginBottom: 8,
              }}
              source={{ uri: "https://placehold.co/80/546518/ffffff/png" }}
            />
            <Text
              style={{
                color: Colors.light.text,
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Radio {index + 1}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
