
import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { images, icon } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'

function Welcome() {
  return (
    <View style={{ 
        backgroundColor: 'white', 
        flex: 1}
        }>
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{ 
                flex: 1
             }}
        >
            <View style={{ 
                flex: 20,
            }}>
                <View style={{ 
                    flexDirection: 'row',
                    height: 100,
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                 }}>
                    <Image 
                        source={icon.medical_icon}
                        style={{ 
                            marginHorizontal: 10,
                            marginEnd: 5,
                            width: 40,
                            height: 40,
                            marginStart: 10
                        }}
                    />
                    <Text style={{ 
                        color: 'white',
                        fontSize: 13,
                        fontWeight: '500'
                        }}>REMOTEPATIENTMANAGEMENT.COM
                    </Text>
                    <View style={{ flex: 1 }}/>
                    <Image 
                    source={icon.question_icon}
                    style={{ 
                        width: 40,
                        height: 40,
                        marginRight: 10
                    }}
                    />
                </View>
            </View>
            <View 
                style={{ 
                    flex: 20,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                 }}
            >
                <Text style={{ paddingBottom: 10, color: 'white', fontSize: 15, fontWeight: 'bold' }}>Welcome to</Text>
                <Text style={{ paddingBottom: 10, color: 'white', fontSize: 17, fontWeight: 'bold' }}>Remote patient management</Text>
                <Text style={{ paddingBottom: 10, color: 'white', fontSize: 15, fontWeight: 'bold' }}>Please select your account type</Text>
            </View>
            <View 
                style={{ 
                    flex: 40,
                    // backgroundColor: 'blue'
                 }}
            >
                <TouchableOpacity style={{ 
                    opacity: 0.4,
                    borderColor: 'white',
                    borderWidth: 2,
                    height: 40,
                    height: 60,
                    borderRadius: 15,
                    marginHorizontal: 15,
                    marginVertical: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                 }}>
                    <Icon name={"check-circle"} style={{ 
                        color: 'green',
                        fontSize: 30
                     }}/>
                    <Text style={{ 
                        color: 'white',
                        fontSize: 17,
                        fontWeight: '900'
                     }}
                    >Click here</Text>
                </TouchableOpacity>
            </View>
            <View 
                style={{ 
                    flex: 20,
                    // backgroundColor: 'green'
                 }}
            >
                <Text>View 10%</Text>
            </View>
        </ImageBackground>
    </View>
  )
}

export default Welcome