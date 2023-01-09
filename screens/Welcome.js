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

function Welcome() {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: "BÁC SĨ",
      isSelected: true,
      location: "LoginDoctor",
    },
    {
      name: "NGƯỜI NHÀ",
      isSelected: false,
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
            flex: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: 100,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              source={icon.medical_icon}
              style={{
                marginHorizontal: 10,
                marginEnd: 5,
                width: 40,
                height: 40,
                marginStart: 10,
              }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 13,
                fontWeight: "500",
              }}
            >
              REMOTEPATIENTMANAGEMENT.COM
            </Text>
            <View style={{ flex: 1 }} />
            <Image
              source={icon.question_icon}
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
              }}
            />
          </View>
        </View>
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
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            CHÀO MỪNG ĐẾN VỚI ỨNG DỤNG
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            QUẢN LÝ BỆNH NHÂN TỪ XA
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Vui lòng chọn loại tài khoản của bạn
          </Text>
        </View>
        <View
          style={{
            flex: 50,
            // backgroundColor: 'blue'
          }}
        >
          {accountTypes.map((accountType) => (
            <UiButton
              onPress={() => {
                setAccountTypes(
                  accountTypes.map((eachAccountType) => {
                    return {
                      ...eachAccountType,
                      isSelected: eachAccountType.name == accountType.name,
                    };
                  })
                );
              }}
              title={accountType.name.toUpperCase()}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>
        <View
          style={{
            flex: 20,
            // backgroundColor: 'green'
          }}
        >
          <UiButton
            title={"TIẾP THEO".toUpperCase()}
            onPress={() => {
              {
                accountTypes.map((account, index) => {
                  if (account.isSelected == true) {
                    navigation.navigate(account.location, (key = index));
                  }
                });
              }
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;
