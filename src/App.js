import React from "react";
import { View, StyleSheet, Text } from "react-native";

const test = () => {
  console.log("test하기");
  console.log("test하기2");
};

const App = () => {
  console.log("처음 화면구현");
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={test}>
        My First React Native!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 30,
  },
});

export default App;
