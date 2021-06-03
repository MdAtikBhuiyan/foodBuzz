import React, { useState, createContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import Cart from './components/Cart/Cart';

export const stateContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  return (
      <stateContext.Provider value={[cart, setCart]}>
        <Cart></Cart>
      </stateContext.Provider>
  );
};
export default App;
