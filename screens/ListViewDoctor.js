import { StackRouter } from "@react-navigation/native";
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
import { ItemDoctor } from "../components";

function ListViewDoctor(props) {
  const [items, setItems] = useState([
    {
      name: "Nguyễn Thành Đặng",
      email: "dangnt@gmail.com",
      phone: "0956821547",
      hospital: "Bệnh viện đa khoa An Giang",
      address: "An Giang",
      url: "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=740&t=st=1673235532~exp=1673236132~hmac=8998677db5fae09c1d5912df224d7edc73961b7d3df36f8dc74c7fe1ca136de5",
    },
    {
      name: "Nguyễn Hoàng Nam",
      email: "namnh@gmail.com",
      phone: "0258931476",
      hospital: "Bệnh viện đa khoa An Giang",
      address: "Cần Thơ",
      url: "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=740&t=st=1673235532~exp=1673236132~hmac=8998677db5fae09c1d5912df224d7edc73961b7d3df36f8dc74c7fe1ca136de5",
    },
  ]);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "while", marginTop: 30 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "800" }}>
          DANH SÁCH BÁC SĨ
        </Text>
      </View>
      <ScrollView>
        {items.map((eachItem) => (
          <ItemDoctor
            name={eachItem.name}
            email={eachItem.email}
            phone={eachItem.phone}
            hospital={eachItem.hospital}
            address={eachItem.address}
            url={eachItem.url}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

export default ListViewDoctor;
