import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Layout from '../Componentes/Layout';
import Plato from '../Componentes/Plato';
import { PlatoContext } from './../Contexto/Context';

const Menu = () => {
    const { platoSeleccionado } = useContext(PlatoContext);
    console.log(platoSeleccionado)
    return (
        <Layout>
            <Text>Menu</Text>
            <View style={styles.menuContainer}>
                {platoSeleccionado.map((plato) => (
                    <Plato
                        key={plato.id}
                        id={plato.id}
                        title={plato.title}
                        image={plato.image}
                        handlePress={() => {}}
                        handleButtonPress={() => {}}
                    />
                ))}
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuContainer: {
        marginTop: 20,
    },
})

export default Menu