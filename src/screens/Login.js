import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Layout from '../Componentes/Layout';
import useEffect from 'react'
const Login = ({ navigation }) => {
    // No esta hecho, no entendi donde guardar el usuario
    return (
        <Layout >
            <View style={styles.container}>
                <Button  title="Ir a la Home" onPress={() => navigation.navigate('Home')} />
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
        display:'flex',
        
    }
})

export default Login;