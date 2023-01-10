import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { images, icon, colors } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import { UiButton } from "../components";

function AdminFamiliar() {
  const [accountTypes, setAccountTypes] = useState([
    {
      key: 1,
      name: "QUẢN LÝ NGƯỜI THÂN",
      location: "LoginDoctor",
    },
    {
      key: 2,
      name: "XEM VỊ TRÍ NGƯỜI THÂN",
      location: "LoginUser",
    },
  ]);
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              paddingBottom: 10,
              color: "white",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            GIAO DIỆN QUẢN LÝ ADMIN
          </Text>
        </View>
        <View
          style={{
            flex: 70,
            // backgroundColor: 'blue'
          }}
        >
          {accountTypes.map((accountType) => (
            <UiButton
              onPress={() => {
                navigation.navigate(accountType.location);
              }}
              title={accountType.name.toUpperCase()}
            />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}

export default AdminFamiliar;
