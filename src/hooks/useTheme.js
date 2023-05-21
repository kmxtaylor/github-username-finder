import { useContext } from 'react';
import { ThemeContext } from 'contexts/Theme';

const useTheme = () => {
  const { theme, setTheme, colors } = useContext(ThemeContext);
  // const context = useContext(ThemeContext);

  return { theme, setTheme, colors };
};

export default useTheme;