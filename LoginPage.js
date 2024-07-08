import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image} from 'react-native';


const ButtonCustom = ({ text, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style = {[styles.button, { backgroundColor: color}]}>
      <Text style = {styles.buttonText}> {text}</Text>
    </TouchableOpacity>
  );
};

const TextInputCustom = ({ placeholder, color, typeKeyboard,}) => {
  return (
    <TextInput 
    keyboardType={typeKeyboard}
    placeholder={placeholder}
    style={[styles.TextInput, { borderColor:color}]}
    />
  );
};

export default function Login({navigation}) {
  return (
    <View style = {styles.container}>
      <Text style={[styles.title, { fontFamily: 'Metro-Bold' }]}
>Login</Text>
      <TextInputCustom placeholder="Email" color="gray" typeKeyboard="email-address"/>
      <TextInputCustom placeholder="Password" color="gray" typeKeyboard="default" secureTextEntry={true}/>
      <TouchableOpacity onPress={() => navigation.navigate ('ForgetPassword')}>
      <Text style ={styles.forgotPasswordText}> forgot your password?</Text>
      </TouchableOpacity>
      <ButtonCustom text="LOGIN" color="red" onPress={() => navigation.navigate('ForgetPassword')}/>
      <Text style ={styles.orText}> or login with social account</Text>
      <View style = {styles.socialContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/gambar/facebook.png')} style={styles.socialIcon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/gambar/th.jpeg')} style={styles.socialIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex : 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  title:{
    fontSize:30,
    marginBottom:20,
  },
  TextInput: {
    width:300,
    height:50,
    borderWidth:1,
    borderRadius:10,
    marginBottom:10,
    paddingLeft:10,
  },
  forgotPasswordText:{
    alignSelf:'flex-center',
    marginRight:30,
    marginBottom:20,
    color:'gray',
  },
  button:{
    width:300,
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:15,
  },
  buttonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  },
  orText: {
    fontSize:16,
    color:'gray',
    marginBottom:20,
  },
  socialContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:150,
  },
  socialIcon: {
    width:50,
    height:50,
    marginHorizontal:10,
  },
}) ;
