import React, { Component, useState } from "react";
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

function LoginDoctor() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e }));
  };
  const navigation = useNavigation();
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
        <View style={{ width: "90%" }}>
          <Text style={([styles.textBody], { alignSelf: "flex-end" })}>
            Fogot Password ?
          </Text>
        </View>
        <Submit
          title={"log in".toUpperCase()}
          color="#3dc6a6"
          onPress={() => {
            // if (inputs.username === "doctor" && inputs.password === "123") {
            //   navigation.navigate("AdminDoctor");
            // } else {
            //   navigation.navigate("Welcome");
            // }
            console.log(username);
            console.log(password);
          }}
        />
        <Text style={styles.textBody}>Or connect using</Text>
        <View style={{ flexDirection: "row" }}>
          <Account
            color="#3b5c8f"
            icon="facebook"
            title="Facebook"
            width={135}
          />
          <Account color="#ec482f" icon="google" title="Google" width={135} />
        </View>
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
