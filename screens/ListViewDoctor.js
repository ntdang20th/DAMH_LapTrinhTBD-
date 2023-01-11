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
import { useNavigation } from "@react-navigation/native";


function ListViewDoctor(props) {
  const navigation = useNavigation();

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
          onPress={() => {
            navigation.navigate('AddPatient');
          }}
          color="#3b5c8f"
          icon="user-plus"
          title="Thêm bệnh nhân"
          width={200}
        />
      </View>
      <ScrollView>
        {listPatient.map((eachItem) => (
          <ItemDoctor
            name={`${eachItem.patient_info.first_name} ${eachItem.patient_info.last_name} / ${eachItem.patient_info.birth}`}
            phone={`${eachItem.patient_info.phone_number} - Gender: ${
              eachItem.patient_info.gender == 1 ? "Nam" : "Nữ"
            }`}
            address={eachItem.patient_info.share_address.address}
            doctor={`${eachItem.doctor.user.first_name} ${eachItem.doctor.user.last_name} `}
            hospital={eachItem.doctor.hospital_name}
            url = {eachItem.patient_info.profile_picture}
          />
        ))}

      </ScrollView>
    </ScrollView>
  );
}

export default ListViewDoctor;
