import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from 'constants/Colors';

const Themes = ['light', 'dark'];

const ThemeContext = createContext({ // theme schema
  theme: 'dark',
  setTheme: () => {},
  colors: Colors['dark'],
  loading: true,
});


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const colors = Colors[theme];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@theme');
        if (value !== null) {
          setTheme(value);
        }
      } catch(e) {
        console.log('error getting theme: ', e);
      }
      setLoading(false);
    }
    getData();
  }, []);
  
  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('@theme', theme);
      } catch (e) {
        console.log('error storing theme: ', e);
      }
    };
    storeData();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors, loading }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, Themes };
export default ThemeContext;