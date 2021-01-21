import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Setting = ({ navigation }) => {
  return (
    <View style={style.about}>
      <Text style={style.text}>This is a Setting Component</Text>
      <Button title="Go to Home Page" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Setting;

const style = StyleSheet.create({
  about: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
  text: {
    fontSize: 24,
  },
});
