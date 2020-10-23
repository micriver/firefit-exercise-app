import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Gridtest from "./components/functional/gridtest";
import Stopwatch from "./components/functional/stopwatch-compound-timer";

export default function App() {
  return (
    <Gridtest />
    // <View style={styles.container}>
    //   <Text style={styles.appTitle}>Firefit🔥</Text>
    //   <Stopwatch />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: "flex",
    // backgroundColor: "#393c59",
    // backgroundColor: "#080818",
    // backgroundColor: "#383C4f",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "12%",
    paddingBottom: "10%",
  },
  appTitle: {
    paddingBottom: "5%",
    fontSize: 40,
    textTransform: "uppercase",
    color: "#f0f3f8",
  },
});
