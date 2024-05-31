import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ 
      flex:1,}}>
        
    <View style={{ 
      flex:1,
      flexDirection:'row',}}>
      <view style={{
        flex: 1,
        backgroundColor: 'red',
      }}>
      </view>
      <view style={{
        flex: 1,
        backgroundColor: 'blue',
      }}>
      </view>
    </View>
    <view style={{
        flex: 1,
        backgroundColor: 'yellow',
      }}>
      </view>
      <view style={{
        flex: 1,
        backgroundColor: 'green',
      }}>
      </view>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})