import { StackRouter } from "@react-navigation/native";
import React, { Component, useEffect, useState } from "react";
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
  const [listPatient, setListPatient] = useState([]);
  useEffect(() => {
    (async () => {
      let list = await getListPatient();
      setListPatient(list);
    })();
  }, []);

  const url = "../assets/doctor/";
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
        {listPatient.map((eachItem) => (
          <ItemDoctor
            name={`${eachItem.patient.patient_info.first_name} ${eachItem.patient.patient_info.last_name} - ${eachItem.patient.patient_info.birth}`}
            phone={`${eachItem.patient.patient_info.phone_number} - sex: ${
              eachItem.patient.patient_info.gender == 1 ? "Nam" : "Nữ"
            }`}
            address={eachItem.patient.patient_info.share_address.address}
            doctor={`${eachItem.patient.doctor.user.first_name} ${eachItem.patient.doctor.user.last_name} `}
            hospital={eachItem.patient.doctor.hospital_name}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

export default ListViewDoctor;
