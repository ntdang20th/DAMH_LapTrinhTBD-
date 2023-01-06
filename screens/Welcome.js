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
import { images, icon, colors } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import { UiButton } from "../components";

function Welcome() {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: "Admin",
      isSelected: true,
    },
    {
      name: "Doctor",
      isSelected: false,
    },
    {
      name: "User",
      isSelected: false,
    },
  ]);
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
            Welcome to
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Remote patient management
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Please select your account type
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
          <UiButton title={"Next".toUpperCase()} />
          <Text style={{ color: "white", alignSelf: "center" }}>
            Want register to register new Account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              alert("Are you want register ???");
            }}
            style={{ color: colors.colorSelected, alignSelf: "center" }}
          >
            <Text style={{ color: colors.colorSelected }}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;