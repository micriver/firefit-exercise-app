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
import LapList from "./list";

export default function TestApp(props) {
  const [laps, setLaps] = useState([0]);
  const [oldLap, saveOldLap] = useState(0);

  // helper function
  const formatLapTime = (t) => {
    return Number.parseFloat(t).toFixed(2);
  };

  const handleLap = (newTime) => {
    let newLap = 0;
    // first lap if check
    if (laps[0] === 0) {
      setLaps([formatLapTime(newTime)]);
      saveOldLap(formatLapTime(newTime));
    } else {
      newLap = newTime - oldLap;
      setLaps([formatLapTime(newLap), ...laps]);
      saveOldLap(newTime);
    }
  };

  return (
    <View style={styles.container}>
      <Timer
        startImmediately={false}
        timeToUpdate={1}
        // formatValue={(value) => `${value < 10 ? `0${value}` : value} units `}
      >
        {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
          <>
            <Text style={styles.stopwatchText}>
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
            <View style={styles.buttonContainer}>
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
            </View>
          </>
        )}
      </Timer>
      <LapList laps={laps} />
    </View>
  );
}

const handleTimerComplete = () => alert("custom completion function");

const styles = StyleSheet.create({
  container: {
    fontFamily: "Helvetica Neue",
    flex: 1,
    display: "flex",
    // backgroundColor: "#383C4f",
    paddingTop: "40%",
  },
  stopwatchText: {
    textAlign: "center",
    color: "#f0f3f8",
    fontSize: 40,
    marginLeft: 7,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "12%",
  },
  button: {
    backgroundColor: "#7a86a4",
    padding: "4%",
    margin: "2%",
    paddingBottom: "2%",
    borderRadius: 10,
  },
  buttonText: {
    color: "#f0f3f8",
    alignSelf: "center",
  },
});

/*

timer settings: https://volkov97.github.io/react-compound-timer/

formatting numbers from string to number and back: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

borders on one side are not natively supported by iOS: https://github.com/facebook/react-native/issues/29#issuecomment-96588898

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
