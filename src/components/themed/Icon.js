import { Ionicons } from '@expo/vector-icons';
import { useCustomTheme } from 'hooks/useCustomTheme';

const Icon = ({ name, size = 30, color = null, ...rest }) => {
  const { colors } = useCustomTheme();
  
  return (
    <Ionicons
      name={name}
      size={size}
      color={color ?? colors.text}
      {...rest}
    />
  );
};

export { Icon };
export default Icon;