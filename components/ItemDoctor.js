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
import Account from "./Account";
function ItemDoctor(props) {
  const { name, phone, hospital, address, doctor, url, backgroundColor } =
    props;
  return (
    <View
      style={{
        backgroundColor: "#1bd5e4",
        marginTop: 10,
        margin: 5,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          height: 150,
          paddingTop: 20,
          paddingStart: 10,
          flexDirection: "row",
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
          source={url}
        />
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
            {name}
          </Text>
          <View style={{ height: 2, backgroundColor: "black" }} />
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", fontSize: 15 }}>Phone: </Text>
            <Text style={{ color: "black", fontSize: 15, fontWeight: "500" }}>
              {phone}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", fontSize: 15 }}>
              Address: {address}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", fontSize: 15 }}>
              Doctor: {doctor}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", fontSize: 15 }}>
              Hospital: {hospital}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ItemDoctor;
