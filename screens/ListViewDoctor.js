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
import { Account, ItemDoctor } from "../components";




function ListViewDoctor(props) {
  const [listPatient, setListPatient] = useState([])
  useEffect(() => {
    (async () => {
      let list = await getListPatient();
      setListPatient(list);
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
        {listPatient.map((eachItem) => (
          <ItemDoctor
            name={`${eachItem.user.first_name} ${eachItem.user.last_name} `}
            email={eachItem.user.email}
            phone={eachItem.phone_number}
            hospital={eachItem.hospital_name}
            address={eachItem.share_address}
            url={eachItem.url}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

export default ListViewDoctor;
