import React from "react";
import { ScrollView, FlatList, StyleSheet, Text, View } from "react-native";

const ListComponent = ({ laps }) => {
  //   let padToTwo = (number) => (number <= 9 ? `0${number}` : number);

  return (
    // <ScrollView style={styles.scroll}>
    //   <FlatList
    //     data={laps}
    //     renderItem={({ laps, index }) => (
    //       <Text key={index + 1} style={styles.item}>
    //         {`#${index}            `}
    //         {laps}
    //       </Text>
    //     )}
    //   />
    // </ScrollView>
    <FlatList
      data={laps}
      renderItem={({ lap }) => <Text style={styles.item}>{lap}</Text>}
    />
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  scroll: {
    maxHeight: "63%",
    backgroundColor: "#C89933",
  },

  item: {
    padding: 10,
    fontSize: 22,
    height: 44,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#fff",
    marginBottom: 1,
  },
});
