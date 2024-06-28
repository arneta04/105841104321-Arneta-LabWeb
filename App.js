// Rest of the import statements
import { useFonts } from 'expo-font';
import {View, Text} from 'react-native';

export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'Semibold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    'Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Light': require('./assets/fonts/Metropolis-Light.otf'),
  });
  if (!dapatFont) {
    return <text> font tidak di temukan </text>
  }
  return (
    <View style= {{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>

      <Text style ={{  fontFamily: 'MetroBlack'}}> Font Metropolis Black </Text>
      <Text style ={{  fontFamily: 'Semibold'}}> Font Metropolis Black </Text>
      <Text style ={{  fontFamily: 'Bold'}}> Font Metropolis Black </Text>
      <Text style ={{  fontFamily: 'Light'}}> Font Metropolis Black </Text>

    </View>
  )
}
