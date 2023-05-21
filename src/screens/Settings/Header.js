import { View } from 'react-native';
import { TextBold } from 'components/themed';

const Header = ({...rest}) => {
  return (
    <View {...rest}>
      <TextBold style={{ fontSize: 30 }}>devfinder</TextBold>
    </View>
  );
};

export default Header;