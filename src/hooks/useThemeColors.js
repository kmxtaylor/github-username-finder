import Colors from 'constants/Colors';
import { useCustomTheme } from './useCustomTheme';

const useThemeColors = () => {
  const customTheme = useCustomTheme();

  return {
    theme: customTheme.theme,
    colors: Colors[customTheme.theme],
  };
}

export { useThemeColors };
export default useThemeColors;