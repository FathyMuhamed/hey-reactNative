import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  function handlePress(): void {
    Alert.alert("Are you sure you want to click button?", "good!", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      { text: "OK!", onPress: () => console.log("OK Pressed") },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text>welcome </Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>press me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
