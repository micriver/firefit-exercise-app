import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import HomeRow from "./homeRow";
import Stopwatch from "./stopwatch-compound-timer";

const gridtest = () => {
  return (
    <Grid style={styles.container}>
      <Row size={1.8}>
        <Image
          source={require("../../assets/firefit.png")}
          resizeMode='contain'
          style={styles.logo}
        ></Image>
      </Row>
      <Row size={6}>
        <Stopwatch />
      </Row>
      <Row size={1.5}>
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
  container: {
    //   center any content
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(35,35,35,1)",
  },
  logo: {
    width: 300,
    height: 278,
    marginTop: -25,
    // backgroundColor: "black",
    // marginLeft: 49,
  },
});

// center text: https://github.com/facebook/react-native/issues/325

/*

react native easy grid: https://www.npmjs.com/package/react-native-easy-grid

*/
