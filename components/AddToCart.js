import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import{ Entypo } from "@expo/vector-icons";

export default function AddToCart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD TO CART</Text>
      <Text style={styles.mainText}>
        When we proceed to the cart page itself, we find the standard approach,
        however in every product line, all options – mostly services – appear
        again, so if you forgot to choose them earlier, or simply changed your
        mind, you can easily modify each item in the cart.
      </Text>
      <View style={styles.imageContainer}>
          <Image source={require("../assets/cart.png")} style={styles.image} />
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.direction}>
        <Text style={styles.previous}>previous</Text>
          <View style={styles.icon}>
            <View style={styles.round}></View>
            <View style={styles.rectangle}></View>
            <View style={styles.round}></View>
          </View>
        <Text style={styles.skip}>skip</Text>
      </View>
      
    </View>
  );
}

{/*We also see a good
use of additional icons and text to assure the customer they’re getting
a good deal: “Includes free items”, “Eligible for 2% Rewards” and the
price tag icon above “Available Savings”. These small elements add up to
convince customers they’ve made the right choice.</Text> */}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 60 

  },
  image: {
    width: 250,
    height: 250,
    marginTop : 20,
    justifyContent: 'center',
    alignItems: 'center'

    
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: 'center'
  },
  title : {
    fontSize : 26,
    fontWeight: 'bold'
  },
  mainText : {
    marginTop: 20
  },
  button : {
    width: 120,
    height: 40,
    backgroundColor: '#372854',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: "center"
    
  },
  buttonText : {
    flexDirection: 'row',
    color: 'white',
    fontSize: 17,
    fontWeight : 'bold'
    
    
  },
  direction: {
    flexDirection: 'row',
    marginTop: 50,

  },
  skip : {
    marginLeft: 100,
    color: '#b0a8a7'
    
  },
  icon: {
    marginLeft: 90,
    flexDirection: 'row',
    marginTop: 10
  },
  
  previous : {
    color : '#b0a8a7'
  },
  round: {
    width: 8,
    height: 8,
    backgroundColor: '#372854',
    borderRadius: 8,
    borderColor: 'black',
    marginLeft: 2
    
  },
  rectangle: {
    width: 14,
    height: 8,
    backgroundColor: '#372854',
    borderRadius: 5,
    borderColor: 'black',
    marginLeft: 2
  }
});

