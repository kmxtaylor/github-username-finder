import { View } from 'react-native';
import { TextBold } from 'components/themed/Text';

const Header = () => {
  return (
    <View>
      <TextBold style={{ fontSize: 30 }}>devfinder</TextBold>
    </View>
  );
};

export default Header;