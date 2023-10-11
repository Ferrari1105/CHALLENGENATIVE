import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Layout from '../Componentes/Layout';
import Plato from '../Componentes/Plato';
import useFetch from '../hooks/useFetch';

const PantallaPlato = ({ route }) => {

    const [plato, setPlato] = useState()
    useEffect(() => {
        const fetchPlato = async() => setPlato(await useFetch(true, route.params.idPlato))
        fetchPlato()
    }, [])
    return (
        <Layout>
            <Plato {...plato} />
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
})

export default PantallaPlato

