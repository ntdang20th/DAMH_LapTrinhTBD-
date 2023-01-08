import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { images } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import { Account, Inputs, Submit } from "../components";
import { useNavigation } from "@react-navigation/native";

function SignUpDoctor() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Image
            source={require("../assets/bg_register_doctor.png")}
            resizeMode="center"
            style={styles.image}
          />
          <Text style={styles.textTitle}>Register for a doctor account</Text>
          <Text style={styles.textBody}>
            Create an account to get all features
          </Text>
          <View style={{ marginTop: 20 }} />
          <Inputs name="Full Name" icon="user" />
          <Inputs name="Email" icon="envelope" />
          <Inputs name="Phone" icon="phone" />
          <Inputs name="Password" icon="lock" pass={true} />
          <Inputs name="Confirm Password" icon="lock" pass={true} />
          <Submit title={"create".toUpperCase()} color="#53d8b9" />
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <Text style={styles.textBody}>Aready have an account? </Text>
            <Text
              style={[styles.textBody, { color: "blue" }]}
              onPress={() => {
                navigation.navigate("LoginDoctor");
              }}
            >
              Log in doctor here
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontSize: 25,
    marginVertical: 10,
    color: "#53d8b9",
  },
  textBody: {
    fontSize: 15,
    marginVertical: 10,
    color: "#53d8b9",
  },
});

export default SignUpDoctor;
