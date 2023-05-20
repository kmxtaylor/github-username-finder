import { Text as DefaultText } from 'react-native';

const Text = ({ style, ...rest }) => {
  return (
    <DefaultText
      style={[{fontFamily: 'SpaceMono-Regular', color: 'white'}, style]}
      {...rest} 
    />
  );
};

const TextBold = ({ style, ...rest }) => {
  return (
    <DefaultText
      style={[{fontFamily: 'SpaceMono-Bold', color: 'white'}, style]}
      {...rest} 
    />
  );
};

export { Text, TextBold };
export default Text;