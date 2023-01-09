import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
function ItemDoctor(props) {
  const { name, email, phone, hospital, address, url } = props;
  return (
    <View>
      <View
        style={{
          height: 150,
          paddingTop: 20,
          paddingStart: 10,
          flexDirection: "row",
          backgroundColor: "#4023dc",
          margin: 5,
          borderRadius: 15,
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "cover",
            borderRadius: 10,
            marginRight: 15,
          }}
          source={{ uri: url }}
        />
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
            {name}
          </Text>
          <View style={{ height: 2, backgroundColor: "black" }} />
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", fontSize: 15 }}>Email: </Text>
            <Text style={{ color: "#efa510", fontSize: 15, fontWeight: "500" }}>
              {email}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", fontSize: 15 }}>Phone: </Text>
            <Text style={{ color: "black", fontSize: 15, fontWeight: "500" }}>
              {phone}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", fontSize: 15 }}>
              Hospital: {hospital}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", fontSize: 15 }}>
              Address: {address}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ItemDoctor;
