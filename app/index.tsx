import React from "react";
import { View, StyleSheet } from "react-native";
import IPhone14 from "../Screens/IPhone14";

const App = () => {
  return (
    <View style={styles.container}>
      <IPhone14 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  redBox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});

export default App;
