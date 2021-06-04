import React, { useState, createContext } from 'react';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './components/GetStarted/GetStarted';
export const stateContext = createContext();

const Stack = createStackNavigator();

const App = () => {

  const [food, setFood] = useState([]);
  const [cart, setCart] = useState([]);

  return (

    <stateContext.Provider value={{
      cartState: [cart, setCart],
      foodState: [food, setFood]
    }}>

      <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
          
        </Stack.Navigator>
        
      </NavigationContainer>

    </stateContext.Provider>

  );
};

export default App;
