import React from "react";
import { ScrollView, FlatList, StyleSheet, Text, View } from "react-native";

const ListComponent = ({ laps }) => {
  //   let padToTwo = (number) => (number <= 9 ? `0${number}` : number);

  return (
    <FlatList
      data={laps}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item > 0 ? item : null}</Text>
      )}
      keyExtractor={(item) => item.index}
      style={styles.list}
    />
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
    borderTopColor: "white",
    borderWidth: 5,
    marginTop: 20,
  },
  item: {
    backgroundColor: "orange",
    borderWidth: 5,
    borderColor: "white",
    color: "#f0f3f8",
    fontSize: 20,
    textAlign: "center",
  },
});
