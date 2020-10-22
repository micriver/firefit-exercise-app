import React, { Component, useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Timer, { getTimeParts } from "react-compound-timer";
import ListComponent from "./list";

export default function TestApp(props) {
  const [laps, setLaps] = useState([0]);
  const [oldLap, saveOldLap] = useState(0);

  const formatLapTime = (t) => {
    return Number.parseFloat(t).toFixed(2);
  };

  const handleLap = (newTime) => {
    // newTimmmme.toFixed(3);
    Number.parseFloat(newTime).toFixed(2);
    console.log(typeof newTime);
    console.log("typeof laps[0] BEFORE LOOP is:    ", typeof laps[0]);
    console.log("typeof newTime BEFORE LOOP is:    ", typeof newTime);
    // calculate lap logic here
    let newLap = 0;
    // first lap if check
    if (laps[0] === 0) {
      // if (typeof laps[0] !== "number" && typeof laps[0] === 0) {
      console.log("here");
      setLaps([formatLapTime(newTime)]);
      saveOldLap(formatLapTime(newTime));
      // setLaps((laps[0] = newTime));
      if ((laps[0] = newTime)) {
        console.log("newTime has taken over the first number in laps.");
        console.log(
          "typeof newTime after being added to array is:    ",
          typeof laps[0]
        );
      }
    } else {
      console.log("we are outside the first if check");
      // if (laps[0] > 0) {
      newLap = newTime - oldLap;
      saveOldLap(newTime);
      // }
      console.log("here is the newLap time:   ", newLap);
      setLaps([formatLapTime(newLap), ...laps]);
      console.log("the new lap has been placed inside the array of laps");
    }
  };
  // console.log("typeof laps[0] is:    ", typeof laps[0]);
  // };
  console.log("Here are the laps:     ", laps);

  return (
    <View style={styles.container}>
      <Timer
        startImmediately={false}
        timeToUpdate={1}
        // formatValue={(value) => `${value < 10 ? `0${value}` : value} units `}
      >
        {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
          <>
            <Text style={styles.text}>
              <Timer.Hours
                formatValue={(value) =>
                  `${value < 10 ? `0${value}` : value} : `
                }
              />
              <Timer.Minutes
                formatValue={(value) =>
                  `${value < 10 ? `0${value}` : value} : `
                }
              />
              <Timer.Seconds
                formatValue={(value) =>
                  `${value < 10 ? `0${value}` : value} . `
                }
              />
              <Timer.Milliseconds
                formatValue={(value) => `${value < 10 ? `0${value}` : value} `}
              />
            </Text>

            {/* buttons */}
            <View style={styles.buttonParent}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  reset();
                  stop();
                  setLaps([0]);
                }}
              >
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={start}>
                <Text style={styles.buttonText}>Start</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={stop}>
                <Text style={styles.buttonText}>Stop</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleLap(getTime() / 1000);
                }}
              >
                <Text style={styles.buttonText}>Lap</Text>
              </TouchableOpacity>
              {/* <ListComponent lap={laps}>Test</ListComponent> */}
            </View>
          </>
        )}
      </Timer>
      <FlatList
        data={laps}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item > 0 ? item : null}</Text>
        )}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
}

const handleTimerComplete = () => alert("custom completion function");

const styles = StyleSheet.create({
  container: {
    fontFamily: "Helvetica Neue",
    flex: 1,
    display: "flex",
    // backgroundColor: "#393c59",
    // backgroundColor: "#080818",
    backgroundColor: "#383C4f",
    alignItems: "center",
    justifyContent: "flex-start",
    // paddingTop: "40%",
  },
  buttonParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "12%",
  },
  button: {
    // backgroundColor: "#38364f",
    backgroundColor: "#7a86a4",
    padding: "4%",
    margin: "2%",
    // paddingBottom: "2%",
    display: "flex",
    borderRadius: 10,
    // width: 80,
  },
  buttonText: {
    color: "#f0f3f8",
    // color: "#7a86a4",
    alignSelf: "center",
  },
  text: {
    color: "#f0f3f8",
    fontSize: 40,
    marginLeft: 7,
  },
});

/*

add elements to array in useState hook: https://www.codegrepper.com/code-examples/r/how+to+add+elements+to+an+array+in+usestate+hook

properly firing a function insided onPress: https://stackoverflow.com/questions/43967308/onpress-function-firing-on-page-load
https://www.codegrepper.com/code-examples/javascript/react+native+onpress+pass+parameter

// Call two functions inside onPress: https://stackoverflow.com/questions/52250061/react-native-how-to-call-multiple-functions-when-onpress-is-clicked/52250942

      <Timer
        initialTime={60 * 1000}
        direction='backward'
        timeToUpdate={10}
        checkpoints={[
          {
            time: 0,
            callback: () => alert("countdown finished"),
          },
          {
            time: 60 * 1000 - 4000,
            callback: () => alert("55 seconds left!"),
          },
        ]}
      >
        <Text style={styles.container}>
          <Text style={styles.text}>
            <Timer.Seconds />
          </Text>
          <Text style={styles.text}>
            .<Timer.Milliseconds />
          </Text>
        </Text>
      </Timer>
      */
