import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { Link } from "expo-router";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { DAILY_DOA_DATA } from "../constants/DailyDoaData";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

// "https://mp3quran.net/api/v3/radios?language=ar&limit=5"

export function DailyPrayerList() {
  const [bottomSheetContent, setBottomSheetContent] = useState<{
    title: string;
    description: string;
  }>({
    title: "",
    description: "",
  });

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["100%"], []);

  const handleOpenPress = useCallback(() => {
    bottomSheetRef?.current?.present();
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef?.current?.close();
  }, []);
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
          ?.map((item: any) => {
            const handlePrayerItemPress = () => {
              const data = DAILY_DOA_DATA[item];

              if (!data?.[0]) return;

              const { category: title, content: description } = data[0];
              if (!title || !description) return;

              setBottomSheetContent({ title, description });
              handleOpenPress();
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.7}
                onPress={handlePrayerItemPress}
                key={item}
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
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={{
          backgroundColor: Colors.light.background,
        }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.content}>
            <Text style={styles.bottomSheetTitle}>
              {bottomSheetContent?.title}
            </Text>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              {bottomSheetContent?.description}
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePress}
              hitSlop={12}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
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
  bottomSheetContent: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    minHeight: 210,
    backgroundColor: Colors.light.background,
  },
  content: {
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
