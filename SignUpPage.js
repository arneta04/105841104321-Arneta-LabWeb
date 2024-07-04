import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image} from 'react-native';
import { useFonts } from 'expo-font';

const ButtonCustom = ({ text, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style = {[styles.button, { backgroundColor: color}]}>
      <Text style = {[styles.buttonText,{fontFamily:'Metro-Medium'}]}> {text}</Text>
    </TouchableOpacity>
  );
};

const TextInputCustom = ({ placeholder, color, typeKeyboard,secureTextEntry }) => {
  return (
    <TextInput 
    keyboardType={typeKeyboard}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    style={[styles.TextInput, { borderColor:color, fontFamily:'Metro-Medium'}]}
    />
  );
};

export default function SignUp({navigation}) {
  const [dapatFont] = useFonts({
  'Metro-Black' : require('./assets/fonts/Metropolis-Black.otf')  ,
  'Metro-Bold' : require('./assets/fonts/Metropolis-Bold.otf')  ,
  'Metro-Light' : require('./assets/fonts/Metropolis-Light.otf')  ,
  'Metro-SemiBold' : require('./assets/fonts/Metropolis-SemiBold.otf')  ,
  'Metro-Medium' : require('./assets/fonts/Metropolis-Medium.otf')  
  });

  if (!dapatFont) {
    return<Text></Text>
  }
  
  return (
    <View style = {styles.container}>
      <Text style={[styles.title, { fontFamily: 'Metro-Bold' }]}
>Sign up</Text>
      <TextInputCustom placeholder="Name" color="gray" typeKeyboard="default"/>
      <TextInputCustom placeholder="Email" color="gray" typeKeyboard="email-address"/>
      <TextInputCustom placeholder="Password" color="gray" typeKeyboard="default" secureTextEntry={true}/>
      <ButtonCustom text="SIGN UP" color="red" onPress={() => navigation.navigate('Login')}/>
      <Text style ={[styles.signInText, {fontFamily:'Metro-Medium'}]}> Already have an account?</Text>
      <Text style ={[styles.orText,{fontFamily:'Metro-Medium'}]}> or signup with social account</Text>
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
    padding:20,
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
    fontFamily:'Metro-Medium',
  },
  signInText: {
    fontSize:16,
    color:'gray',
    marginBottom:10,
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
