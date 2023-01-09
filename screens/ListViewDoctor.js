import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

function ListViewDoctor(props) {
  const [doctor, setDoctor] = useState([
    {
      name: "Nguyễn Thành Đặng",
      age: "22",
      address: "An giang",
      hospital: "An giang",
      url: "",
    },
  ]);
  return (
    <View style={{ flex: 1, backgroundColor: "while" }}>
      <View>
        <View
          style={{
            height: 150,
            backgroundColor: "red",
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
            source={{
              uri: "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=740&t=st=1673235532~exp=1673236132~hmac=8998677db5fae09c1d5912df224d7edc73961b7d3df36f8dc74c7fe1ca136de5",
            }}
          />
          <View
            style={{ backgroundColor: "green", flex: 1, marginRight: 10 }}
          ></View>
        </View>
      </View>
    </View>
  );
}

export default ListViewDoctor;
