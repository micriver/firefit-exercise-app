import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Stopwatch from "./components/functional/stopwatch-compound-timer";
// import Stopwatch from "./components/functional/stopwatch-functional";
// import Stopwatch from "./screens/new-stopwatch-inaccurate";
// import Stopwatch from "./screens/stopwatch";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Firefit🔥</Text>
      <Stopwatch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    // backgroundColor: "#393c59",
    // backgroundColor: "#080818",
    backgroundColor: "#383C4f",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "40%",
  },
  appTitle: {
    paddingBottom: "10%",
    fontSize: 40,
    textTransform: "uppercase",
    color: "#f0f3f8",
  },
});
