import { Text as DefaultText } from 'react-native';
import { useThemeColors } from 'hooks/useThemeColors';

const Text = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[{fontFamily: 'SpaceMono-Regular', color: colors.text}, style]}
      {...rest} 
    />
  );
};

const TextBold = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[{fontFamily: 'SpaceMono-Bold', color: colors.text}, style]}
      {...rest} 
    />
  );
};

export { Text, TextBold };
export default Text;