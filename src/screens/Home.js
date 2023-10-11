import { FlatList, StyleSheet, Text, View, RefreshControl, TextInput, ScrollView, Button } from 'react-native';
import Plato from '../Componentes/Plato'
import { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch';
import Layout from '../Componentes/Layout';

const Home = ({ navigation }) => {
    const [Platos, setPlatos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [platosFiltrados, setPlatosFiltrados] = useState([])
    const [busqueda, setBusqueda] = useState('')

    const buscarPlatos = async () => {
        setRefreshing(true)
        const platos = await useFetch(true)
        setRefreshing(false)
        setPlatos(platos)
        setPlatosFiltrados(platos)
    }

    useEffect(() => { buscarPlatos() }, [])

    useEffect(() => { // filtrar platos
        if (!busqueda) return
        var nuevosPlatos = [...Platos]
        nuevosPlatos = nuevosPlatos.filter(plato => (
            plato.title.toUpperCase().includes(busqueda.toUpperCase())
        ))
        setPlatosFiltrados(nuevosPlatos)
    }, [busqueda])

    const handleChange = newBusqueda => setBusqueda(newBusqueda)
    
    const handlePress = idPlato => {
        navigation.navigate('Plato', { idPlato })
    }

    return (
        <Layout>
            <Text style={{fontSize: '40px', color:'white', display: 'flex', justifyContent: 'center'}}>Home</Text>
            <View style={{width: '100%'}}>
                <Button title="Ver Menu" onPress={() => navigation.navigate('Menu')} />
            </View>
            <TextInput 
                placeholder='Buscar plato...'
                style={styles.textInput}
                onChangeText={handleChange}
                value={busqueda}
            />
            
            <ScrollView style={{ flex: 1 }}>
                <FlatList
                    nestedScrollEnabled={true}
                    refreshControl={
                        <RefreshControl onRefresh={async () => await buscarPlatos()}
                            // colors={['lightcoral']}
                            progressBackgroundColor={'lightblue'}
                            refreshing={refreshing}
                        />
                    }
                    contentContainerStyle={styles.Platos}
                    data={platosFiltrados}
                    renderItem={({ item }) => <Plato {...item} handlePress={() => handlePress(item.id)} />}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    Platos: {
        flex: 1,
        alignItems: 'center',
        gap: 20,
        width: '100%',
        height: '100%',
    },
    textInput: {
        height: 40, 
        borderColor: 'gray',
        color: 'black',
        backgroundColor:'white',
        borderRadius: 5,
        borderWidth: 1, 
        width: '100%', 
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})

export default Home

