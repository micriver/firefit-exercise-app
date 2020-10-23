import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function homeRow() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name='run-fast' size={30} color='#FF471A' />
      <MaterialCommunityIcons name='run-fast' size={30} color='#FF471A' />
      <MaterialCommunityIcons name='run-fast' size={30} color='#FF471A' />
      <Fontisto name='stopwatch' size={30} color='#FF471A' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "5%",
  },
});
