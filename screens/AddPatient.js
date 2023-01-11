import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { Account, Inputs, Submit } from "../components";
import { useNavigation } from "@react-navigation/native";
import {Picker} from '@react-native-picker/picker'
import { addPatient } from "../api/patient";

function AddPatient() {
  const [resquest, setRequest] = useState({
    uuid:'',
    last_name: '',
    first_name:'',
    gender:'',
    birth:'',
    phone_number:'',
    address:'',
    picture:''
  })

  const navigation = useNavigation();
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const onSubmit = async () => {
    console.log(resquest)
    let response = await addPatient(resquest);
    console.log(response)
    if(response.Success){
      navigation.navigate('ListViewDoctor')
    }
    else{
      alert(response.Message)
    }
  }
  return (
    <View>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Image
            source={require("../assets/bg_register_admin.png")}
            resizeMode="center"
            style={styles.image}
          />
          <Text style={styles.textTitle}>Thêm bệnh nhân mới</Text>
          <View style={{ marginTop: 20 }} />
          <Inputs placeholder="UUID thiết bị" icon="user" name="username" 
          onChangeText={(text) => setRequest({
            ...resquest,
            uuid:text
          })}/>
          <Inputs placeholder="Họ và tên đệm" icon="user"  
          onChangeText={(text) => setRequest({
            ...resquest,
            last_name:text
          })}/>
          <Inputs placeholder="Tên" icon="user"  
          onChangeText={(text) => setRequest({
            ...resquest,
            first_name:text
          })}/>
          
          <View 
            style={{marginHorizontal:10}}>
            <Picker
              placeholder="Giới tính"
              style={{ height: 50, width: 330, textAlign:'center', 
              borderColor:'black', borderWidth:3}}
              onValueChange={(itemValue) => 
                setRequest({
                  ...resquest,
                  gender: itemValue
                })}
            >
              <Picker.Item label="Nam" value="1" />
              <Picker.Item label="Nữ" value="0" />
            </Picker>
          </View>

          <Inputs placeholder="Ngày sinh" icon="calendar"  
          onChangeText={(text) => setRequest({
            ...resquest,
            birth:text
          })}/>
         

          <Inputs placeholder="Số điện thoại" icon="phone"  
          onChangeText={(text) => setRequest({
            ...resquest,
            phone_number:text
          })}/>
          <Inputs placeholder="Địa chỉ" icon="lock" 
          onChangeText={(text) => setRequest({
            ...resquest,
            address:text
          })}/>
          <Inputs placeholder="Ảnh" icon="lock"  
          onChangeText={(text) => setRequest({
            ...resquest,
            picture:text
          })}/>
          <Submit title={"Tạo".toUpperCase()} color="#ef6f58" onPress={onSubmit} />
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
    color: "#ef6f58",
  },
  textBody: {
    fontSize: 15,
    marginVertical: 10,
    color: "#ef6f58",
  },
});

export default AddPatient;