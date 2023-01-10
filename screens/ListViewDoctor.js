import { StackRouter } from "@react-navigation/native";
import React, { Component, useState, useEffect } from "react";
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
import { getListDoctor } from "../api/doctor";
import { getListPatient } from "../api/patient";
import { Account, ItemDoctor } from "../components";

function ListViewDoctor(props) {
  const [items, setItems] = useState([
    // {
    //   name: "Nguyễn Thành Đặng",
    //   email: "dangnt@gmail.com",
    //   phone: "0956821547",
    //   hospital: "Bệnh viện đa khoa An Giang",
    //   address: "An Giang",
    //   url: "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=740&t=st=1673235532~exp=1673236132~hmac=8998677db5fae09c1d5912df224d7edc73961b7d3df36f8dc74c7fe1ca136de5",
    // },
    // {
    //   name: "Nguyễn Hoàng Nam",
    //   email: "namnh@gmail.com",
    //   phone: "0258931476",
    //   hospital: "Bệnh viện đa khoa An Giang",
    //   address: "Cần Thơ",
    //   url: "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=740&t=st=1673235532~exp=1673236132~hmac=8998677db5fae09c1d5912df224d7edc73961b7d3df36f8dc74c7fe1ca136de5",
    // },
  ]);

  const [patient, setPatient] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await getListPatient();
      setItems(data);
    })();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "while", marginTop: 40 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "800" }}>
          DANH SÁCH BỆNH NHÂN
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Account
          color="#3b5c8f"
          icon="user-plus"
          title="Thêm bệnh nhân"
          width={200}
        />
      </View>
      <ScrollView>
        {items.map((eachItem) => (
          <ItemDoctor
            name={`${eachItem.patient_info.last_name} ${eachItem.patient_info.first_name}`}
            phone={eachItem.patient_info.phone_number}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

export default ListViewDoctor;
