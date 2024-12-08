import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainHeader } from "../components/MainHeader";
import { LiveStreamList } from "../components/LiveStreamList";
import { DailyPrayerList } from "../components/DailyPrayerList";
import PrayerCard from "../components/PrayerCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <MainHeader />
        <PrayerCard />
        <LiveStreamList />
        <DailyPrayerList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 16,
  },
});
