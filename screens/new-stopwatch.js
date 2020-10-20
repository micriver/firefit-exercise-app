import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

let padToTwo = (num) => (num <= 9 ? `0${num}` : num);

export default function stopwatch() {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [msec, setMsec] = useState(0);
  const [laps, setLaps] = useState([]); // empty array to loop populate and display
  const [start, setStart] = useState(false);
  // const [time, setTime] = useState(null);

  // stopwatch functions
  const handleToggle = () => {
    setStart(!start);
    // might need to set a reset to false here for timer
  };

  const handleLap = (min, sec, msec) => {
    laps = [{ min, sec, msec }, ...laps]; // add new lap time on top
  };

  let interval = null;

  const handleStart = () => {
    if (!start) {
      interval = setInterval(() => {
        // console.log("hi mike");
        // setSec((sec) => sec + 1);
        if (sec !== 59) {
          setSec((sec) => sec + 1);
        }
      }, 1000);
    }
    // clearInterval(interval);
    // setStart(false);
  };
  // // setStart(true);
  // // } else {
  // //   clearInterval(interval);
  // // }
  // if (!start) {
  //   interval = setInterval(() => {
  //     if (msec !== 99) {
  //       setMsec(msec + 1);
  //     } else if (sec !== 59) {
  //       setMsec(0);
  //       setSec(1 + sec);
  //     } else {
  //       setMsec(0);
  //       setSec(0);
  //       setMin(1 + min);
  //     }
  //   }, 1); // interval is 1 MILIsecond
  // } else {
  //   clearInterval(interval);
  //   interval = null;
  //   }
  // };

  const handleStop = () => {
    console.log("stop");
    clearInterval(interval);
    setStart(false);
    interval = null;
  };

  const handleReset = () => {
    // setStart(false);
    if (!start) {
      console.log("start is false now");
    }
    setHours(0);
    setMin(0);
    setSec(0);
    setMsec(0);

    setLaps([]);
    clearInterval(interval);
    interval = null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <Text style={styles.child}>{padToTwo(hours) + " : "}</Text>
        <Text style={styles.child}>{padToTwo(min) + " : "}</Text>
        <Text style={styles.child}>{padToTwo(sec) + " : "}</Text>
        <Text style={styles.child}>{padToTwo(msec)}</Text>
      </View>

      <View style={styles.buttonParent}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleReset}>
            Reset
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleStart}>
            {!start ? "Start" : "Stop"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleStop}>
            Stop
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleLap}>
            Lap
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    flexDirection: "row",
  },
  child: {
    color: "#f0f3f8",
    fontSize: 40,
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
    padding: "5%",
    paddingBottom: "2%",
    display: "flex",
    borderRadius: 10,
    width: 80,
  },
  buttonText: {
    color: "#f0f3f8",
    // color: "#7a86a4",
    alignSelf: "center",
  },
});

/*

resources:
build stopwatch: https://codersera.com/blog/first-react-native-app-stopwatch/
stopwatch component, though not as customizable: https://github.com/michaeljstevens/react-native-stopwatch-timer/blob/master/lib/stopwatch.js
convert class component to functional component: https://nimblewebdeveloper.com/blog/convert-react-class-to-function-component

setInterval explanation: https://youtu.be/ubLC1JxMqfY?t=231

// setInterval(() => {
//   console.log("hi mike!");
// }, 1000); // 1000 equals, 1 second

setInterval just doesn't seem to work with React Hooks: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

*/
