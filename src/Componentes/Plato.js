import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Button } from 'react-native';
import { PlatoContext } from './../Contexto/Context';
import { AsyncStorage } from 'react-native'
export default function Card({ id, title, image, handlePress }) {
    const {platoSeleccionado, setPlatoSeleccionado } = useContext(PlatoContext);

    const handlePressMenu = () => {
        const updatedPlatoSeleccionado = [...platoSeleccionado, { id, title, image }];
        setPlatoSeleccionado(updatedPlatoSeleccionado);
      //AsyncStorage.setItem('platoSeleccionado', JSON.stringify(updatedPlatoSeleccionado));
    };
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Image source={require('/assets/cargando.png')} style={styles.image} />
        )}
        <Text style={styles.title}>{title || 'Cargando...'}</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePressMenu()}>
          <Text style={styles.buttonText}>añadir al menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  image: {
    width: '500px',
    height: 300,
    borderRadius: 10,
    objectFit: 'cover',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#6596e6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
