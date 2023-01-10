import React, { Component, useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import { images } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import { Account, Inputs, Submit } from "../components";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { getListDoctor } from "../api/doctor";
import { user_login } from "../api/auth";

function LoginDoctor() {
  const isLogin = false;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e }));
  };
  const navigation = useNavigation();

  const [doctor, setDoctor] = useState([]);

  const onSubmit = async () => {
    var result = await user_login(username, password, true);
    console.log(result);
    if (result.Success) {
      navigation.navigate("AdminDoctor");
    } else {
      navigation.navigate("LoginDoctor");
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/bg_login_doctor.png")}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Doctor login</Text>
        <Text style={styles.textBody}>Log in your existant account</Text>
        <View style={{ marginTop: 20 }} />
        <Inputs
          name="username"
          icon="user"
          placeholder="Tài khoản"
          onChangeText={(text) => setUsername(text)}
        />
        <Inputs
          name="password"
          icon="lock"
          pass={true}
          placeholder="Mật khẩu"
          onChangeText={(text) => setPassword(text)}
        />
        {isLogin == true ? (
          <Text style={{ fontSize: 20, color: "red" }}>
            Sài tài khoản hoặc mật khẩu
          </Text>
        ) : (
          ""
        )}
        <View style={{ width: "90%" }}>
          <Text style={([styles.textBody], { alignSelf: "flex-end" })}>
            Fogot Password ?
          </Text>
        </View>
        <Submit
          title={"log in".toUpperCase()}
          color="#3dc6a6"
          onPress={onSubmit}
        />
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.textBody}>Don't have an account? </Text>
          <Text
            style={[styles.textBody, { color: "blue" }]}
            onPress={() => {
              navigation.navigate("SignUpDoctor");
            }}
          >
            Sign up doctor
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontSize: 40,
    marginVertical: 10,
    color: "#3dc6a6",
  },
  textBody: {
    fontSize: 15,
    marginVertical: 10,
    color: "#3dc6a6",
  },
});

export default LoginDoctor;
