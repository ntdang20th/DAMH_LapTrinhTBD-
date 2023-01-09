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
import axios from "axios";

function LoginAdmin() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/bg_login_admin.png")}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Admin login</Text>
        <Text style={styles.textBody}>Log in your existant account</Text>
        <View style={{ marginTop: 20 }} />
        <Inputs
          placeholder="Username"
          icon="user"
          name="username"
          onChange={handChange}
        />
        <Inputs
          placeholder="Password"
          icon="lock"
          pass={true}
          name="password"
          onChange={handChange}
        />
        <View style={{ width: "90%" }}>
          <Text style={([styles.textBody], { alignSelf: "flex-end" })}>
            Fogot Password ?
          </Text>
        </View>
        <Submit
          title={"log in".toUpperCase()}
          color="#f3b44d"
          onPress={() => {
            navigation.navigate("ListViewDoctor");
          }}
        />
        <Text style={styles.textBody}>Or connect using</Text>
        <View style={{ flexDirection: "row" }}>
          <Account color="#3b5c8f" icon="facebook" title="Facebook" />
          <Account color="#ec482f" icon="google" title="Google" />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.textBody}>Don't have an account? </Text>
          <Text
            style={[styles.textBody, { color: "blue" }]}
            onPress={() => {
              navigation.navigate("SignUpAdmin");
            }}
          >
            Sign up admin
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
    color: "#f3b44d",
  },
  textBody: {
    fontSize: 15,
    marginVertical: 10,
    color: "#f3b44d",
  },
});

export default LoginAdmin;
