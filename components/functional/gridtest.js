import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import HomeRow from "./homeRow";
import Stopwatch from "./stopwatch-compound-timer";

const gridtest = () => {
  return (
    <Grid>
      {/* <Image
        style={styles.logo}
        source={require("../../assets/firefit.png")}
      ></Image> */}
      <Row size={6} style={{ backgroundColor: "grey" }}>
        <Stopwatch />
      </Row>
      <Row size={1.1} style={{ backgroundColor: "grey" }}>
        <HomeRow />
      </Row>
    </Grid>
    // <Grid style={{ backgroundColor: "orange" }}>
    //   <Row>
    //     {/* <Row style={{ height: 800 }}> */}
    //     <Col style={styles.container}>
    //       <Text style={styles.text}>This is the red column</Text>
    //     </Col>
    //     <Col style={{ backgroundColor: "blue", margin: 20 }}></Col>
    //   </Row>
    //   <Row style={{ margin: 20 }}>
    //     <Col style={{ backgroundColor: "green" }}></Col>
    //     <Col style={{ backgroundColor: "yellow" }}></Col>
    //   </Row>
    // </Grid>
  );
};

export default gridtest;

const styles = StyleSheet.create({
  logo: {
    // padding: "10%",
  },
  container: {
    //   center any content
    // flex: 1,
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
