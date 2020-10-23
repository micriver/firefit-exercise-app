import React from "react";
import { ScrollView, FlatList, StyleSheet, Text, View } from "react-native";

const ListComponent = ({ laps }) => {
  //   let padToTwo = (number) => (number <= 9 ? `0${number}` : number);

  return (
    <View style={styles.lapListContainer}>
      <FlatList
        data={laps}
        renderItem={({ item }) => (
          <View style={item > 0 ? styles.lapItemContainer : null}>
            <Text
              style={{ textAlign: "center", color: "white", fontSize: "20" }}
            >
              {item > 0 ? `${item}` : null}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.index}
        style={styles.list}
      />
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  lapListContainer: {
    borderTopColor: "white",
    borderTopWidth: 1,
    marginTop: 30,
  },
  lapItemContainer: {
    padding: 10,
    fontSize: 22,
    height: 44,
    color: "white",
    textAlign: "center",
    marginBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
});
