import { createContext, useState } from 'react';
import Colors from 'constants/Colors';

const Themes = ['light', 'dark'];

const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
  colors: Colors['dark'],
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const colors = Colors[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, Themes };
export default ThemeContext;