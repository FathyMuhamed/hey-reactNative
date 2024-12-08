import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainHeader } from "../components/MainHeader";
import { LiveStreamList } from "../components/LiveStreamList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <MainHeader />
      <LiveStreamList />
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
