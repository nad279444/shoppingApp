import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import AddToCart from './components/AddToCart'
 import OnlineShopping from "./components/OnlineShopping"
//import Payment from "./components/Payment"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AddToCart />  */}
        <OnlineShopping /> 
      {/* <Payment /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

