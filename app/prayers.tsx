import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DAILY_DOA_DATA } from "../constants/DailyDoaData";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Prayers() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        {Object.keys(DAILY_DOA_DATA)?.map((item: any) => {
          const handlePrayerItemPress = () => {
            const data = DAILY_DOA_DATA[item];

            if (!data?.[0]) return;

            const { category: title, content: description } = data[0];
            if (!title || !description) return;

            // setBottomSheetContent({ title, description });
            // handleOpenPress();
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
              <Text numberOfLines={1} style={styles.itemText}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.light.background,
  },
  text: {
    fontSize: 24,
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
