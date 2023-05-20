import { createContext } from 'react';
import Colors from 'constants/Colors';

const Theme = createContext({
  theme: 'dark',
  setTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const colors = Colors[theme];

  return (
    <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
  );
};

export { Theme, ThemeProvider };