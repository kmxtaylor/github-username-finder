import { useContext } from 'react';
import { ThemeContext } from 'contexts/Theme';

const useCustomTheme = () => {
  const context = useContext(ThemeContext);

  return {
    theme: context.theme,
    colors: context.colors,
    setTheme: context.setTheme,
    loading: context.loading,
  };
};

export { useCustomTheme };
export default useCustomTheme;