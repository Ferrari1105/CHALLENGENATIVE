import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

const PlatoContext = createContext();

const PlatoProvider = ({ children }) => {
  const [platoSeleccionado, setPlatoSeleccionado] = useState([]);

  useEffect(() => {
    const loadPlatosSeleccionados = async () => {
      try {
        const storedPlatosSeleccionados = await AsyncStorage.getItem('platoSeleccionado');
        if (storedPlatosSeleccionados) {
          setPlatoSeleccionado(JSON.parse(storedPlatosSeleccionados));
        }
      } catch (error) {
        console.error('no hice que funcione el asyncstorage', error);
      }
    }

    loadPlatosSeleccionados();
  }, []);

  return (
    <PlatoContext.Provider value={{ platoSeleccionado, setPlatoSeleccionado }}>
      {children}
    </PlatoContext.Provider>
  );
};

export { PlatoContext, PlatoProvider };
