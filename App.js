import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

// custom component
const ButtonCostum = ({ text, color }) => {
  return (
    <View>
      <View style = {{
        width: 250,
        height: 100,
        backgroundColor: color,
        borderRadius: 50,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style ={{
          textAlign: 'center',
          color:'white',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
          {text}
        </Text>
      </View>
      <Text></Text>
    </View>
  )
}
// Custom component, text input
const TextInputCustom = ({ placeholder, color, typeKeyboard}) => {
  return (
    <TextInput 
    keyboardType={typeKeyboard}
    placeholder={placeholder}
    style = {{
    width: 250,
    height:50,
    borderColor: color,
    borderWidth:3,
    marginBottom: 10,
    paddingLeft: 10,
      }}
    />
  )
}
export default function App () {
  return (
    <View style ={{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    }}>
      
      <ButtonCostum text ="login" color="green" />
      <ButtonCostum text ="register" color="blue" />
      <ButtonCostum text ="google" color="red" />
      
      <TextInputCustom placeholder="masukkan nama" color="pink" typeKeyboard="default" />
      <TextInputCustom placeholder="masukkan nomor hp" color="pink" typeKeyboard="numerik" />


    </View>
  )
}

