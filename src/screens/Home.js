import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={style.home}>
      <Text style={style.text}>This is a Home Component</Text>
      <Button
        title="Go to Setting Page"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  home: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 24,
  },
});
