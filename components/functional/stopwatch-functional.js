import React, { Component, useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

export default function TestApp(props) {
  const [timerStart, setTimerStart] = useState(false);
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [totalDuration, setTotalDuration] = useState(90000);
  const [timerReset, setTimerReset] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);

  const toggleTimer = () => {
    setTimerStart(!timerStart); // toggle to the state of the timer
    setTimerReset(false);
    // setState({ timerStart: !state.timerStart, timerReset: false });
  };

  const resetTimer = () => {
    setTimerStart(false);
    setTimerReset(true);
    // setState({ timerStart: false, timerReset: true });
  };

  const toggleStopwatch = () => {
    setStopwatchStart(!stopwatchStart); // toggle the state of the stopwatch
    setStopwatchReset(false);
    // setState({
    //   stopwatchStart: !state.stopwatchStart,
    //   stopwatchReset: false,
    // });
  };

  const resetStopwatch = () => {
    setStopwatchStart(false);
    setStopwatchReset(true);
    // setState({ stopwatchStart: false, stopwatchReset: true });
  };

  getFormattedTime = (time) => {
    currentTime = time;
  };

  return (
    <View>
      <Stopwatch
        laps
        msecs
        start={stopwatchStart}
        reset={stopwatchReset}
        options={options}
        getTime={getFormattedTime}
      />
      <TouchableHighlight onPress={toggleStopwatch}>
        <Text style={{ fontSize: 30 }}>
          {!stopwatchStart ? "Start" : "Stop"}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={resetStopwatch}>
        <Text style={{ fontSize: 30 }}>Reset</Text>
      </TouchableHighlight>
      <Timer
        totalDuration={totalDuration}
        msecs
        start={timerStart}
        reset={timerReset}
        options={options}
        handleFinish={handleTimerComplete}
        getTime={getFormattedTime}
      />
      <TouchableHighlight onPress={toggleTimer}>
        <Text style={{ fontSize: 30 }}>{!timerStart ? "Start" : "Stop"}</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={resetTimer}>
        <Text style={{ fontSize: 30 }}>Reset</Text>
      </TouchableHighlight>
    </View>
  );
}

const handleTimerComplete = () => alert("custom completion function");

const options = {
  container: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: "#FFF",
    marginLeft: 7,
  },
};
