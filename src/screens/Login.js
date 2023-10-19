import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Layout from '../Componentes/Layout';
import useEffect from 'react'
const Login = ({ navigation }) => {

    const { usuario, setUsuario } = ({})
    useEffect(() => setUsuario(null), [])

    const [login, setlogin] = useState({})
    const [error, setError] = useState('')

    const handleEmailChange = (email) => setlogin({ ...login, email })
    const handlePasswordChange = (password) => setlogin({ ...login, password })

    const handleLogin = () => {
        const postData = async () => {
            try {
                const response = await fetch('http://challenge-react.alkemy.org/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(login)
                })
                if (!response.ok) throw new Error('Error en la peticion')
                setUsuario(login)
                navigation.navigate('Home')
            } catch (error) {
                setError('Error en la peticion')
                console.error(error)
            }
        }
        postData()
    }

    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.label}>Correo Electrónico:</Text>
                <TextInput
                    placeholder="blabla@lolsas.com"
                    onChangeText={handleEmailChange}
                    value={login.email || ''}
                />
                <Text style={styles.label}>Contraseña:</Text>
                <TextInput

                    placeholder="12345"
                    value={login.password || ''}
                    onChangeText={handlePasswordChange}
                    secureTextEntry 
                />
                <Button title="Iniciar Sesión" onPress={handleLogin} />

                <View><Text>{error}</Text></View>

            </View>
            {/*Por si no anda el fetch*/}
            <View>
                <Button title="Continuar Sin Logearse" onPress={() => navigation.navigate('Home')} />
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    container: {
        padding: 20,
        width: '100%',
        display:'flex',
        
    }
})

export default Login;