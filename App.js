import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style ={{
      flex: 1,
      flexDirection:"row"
    }}>
      <View style = {{
        flex: 1,
        alignItems:"flex-end",
        justifyContent:"center",
      }}>
        <View style={{
          width: 140,
          height :80,
          backgroundColor: "red",
          borderRadius: 10,
          marginright: 10,
          justifyContent:"center",
          alignItems:"center",
        }}>
          <Text style={{
            color:"white",
            fontsize:25,
          }}>
            SIGN IN 
          </Text>
        </View>
      </View>

      <View style ={{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"center",
      }}>
        <View style ={{
          flex:1,
          alignItems:"flex-start",
          justifyContent:"center",
        }}>
        <View style ={{
          width:140,
          height:80,
          backgroundColor:"blue",
          borderRadius:10,
          marginLeft:10,
          justifyContent:"center",
          alignItems:"center",
        }}>

      <Text style ={{
        color:"white",
        fontsize:25,
      }}>
        SIGN UP
      </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})