import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const gridtest = () => {
  return (
    // <Grid>
    //   <Col style={{ backgroundColor: "green" }}>
    //     <Text>this is the first row</Text>
    //   </Col>
    //   <Col>
    //     <Row style={{ backgroundColor: "blue" }}>
    //       <Text>this is row 2</Text>
    //     </Row>
    //     <Row style={{ backgroundColor: "red" }}>
    //       <Text>this is row 3</Text>
    //     </Row>
    //   </Col>
    // </Grid>
    <Grid style={{ backgroundColor: "orange" }}>
      <Row>
        {/* <Row style={{ height: 800 }}> */}
        <Col style={styles.container}>
          <Text style={styles.text}>This is the red column</Text>
        </Col>
        <Col style={{ backgroundColor: "blue", margin: 20 }}></Col>
      </Row>
      <Row style={{ margin: 20 }}>
        <Col style={{ backgroundColor: "green" }}></Col>
        <Col style={{ backgroundColor: "yellow" }}></Col>
      </Row>
    </Grid>
  );
};

export default gridtest;

const styles = StyleSheet.create({
  container: {
    //   center any content
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});

// center text: https://github.com/facebook/react-native/issues/325
