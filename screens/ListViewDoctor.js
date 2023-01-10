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
  const [items, setItems] = useState([]);

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
