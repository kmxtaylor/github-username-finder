import { StatusBar as DefaultStatusBar } from 'react-native';
import { useCustomTheme } from 'hooks/useCustomTheme';

const StatusBar = ({ ...rest }) => {
  const { theme } = useCustomTheme();

  const barStyle = ( theme === 'dark' ) ? 'light-content' : 'dark-content';

  return (
    <DefaultStatusBar barStyle={barStyle} {...rest} />
  );
};

export { StatusBar };
export default StatusBar;