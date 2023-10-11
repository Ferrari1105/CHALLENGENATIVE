import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Menu from './src/screens/Menu';
import PantallaPlato from './src/screens/PantallaPlato';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PlatoProvider } from './src/Contexto/Context';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <PlatoProvider>
      
      <Stack.Navigator>
      <Stack.Screen style={styles.color} name='Login' component={Login} options={() => ({ title: "Lo sentimos, Login fuera de funcionamiento",})}
        />
        <Stack.Screen name='Home' component={Home}options={({navigation}) => ({title: "Home",    
            header: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.header}>Ir a Login</Text>
              </TouchableOpacity>
            )
          })} />
        <Stack.Screen name='Plato' component={PantallaPlato}options={() => ({title: "Plato",})}
        />
        <Stack.Screen name='Menu' component={Menu}options={() => ({title: "Menu",})}
        />
      </Stack.Navigator>
        </PlatoProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
  }
})
