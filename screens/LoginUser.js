import React, { Component } from "react";
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

function LoginUser() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/bg_login_user.png")}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>User login</Text>
        <Text style={styles.textBody}>Log in your existant account</Text>
        <View style={{ marginTop: 20 }} />
        <Inputs name="Email" icon="user" />
        <Inputs name="Password" icon="lock" pass={true} />
        <View style={{ width: "90%" }}>
          <Text style={([styles.textBody], { alignSelf: "flex-end" })}>
            Fogot Password ?
          </Text>
        </View>
        <Submit title={"log in".toUpperCase()} color="#4648ec" />
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
              navigation.navigate("SignUp");
            }}
          >
            Sign up user
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
    color: "#4648ec",
  },
  textBody: {
    fontSize: 15,
    marginVertical: 10,
    color: "#4648ec",
  },
});

export default LoginUser;
