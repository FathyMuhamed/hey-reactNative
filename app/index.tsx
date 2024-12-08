import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeCard } from "../components/HomeCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <HomeCard />
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
