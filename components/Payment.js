import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Payment() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAYMENT SUCCESSFUL</Text>
      <Text style={styles.mainText}>
        We also see a good use of additional icons and text to assure the
        customer they’re getting a good deal: “Includes free items”, “Eligible
        for 2% Rewards” and the price tag icon above “Available Savings”. These
        small elements add up to convince customers they’ve made the right
        choice.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/successful.png")}
          style={styles.image}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.direction}>
        <Text style={styles.previous}>previous</Text>
        <View style={styles.icon}>
          <Entypo name="dots-three-horizontal" size={15} color="#b0a8a7" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 60,
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  mainText: {
    marginTop: 20,
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: "#372854",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    flexDirection: "row",
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  direction: {
    flexDirection: "row",
    marginTop: 50,
  },

  icon: {
    marginLeft: 100,
  },
  previous: {
    color: "#b0a8a7",
  },
});
