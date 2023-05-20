import { View } from 'react-native';
import { MyTextBold } from 'components/themed/MyText';

const Header = () => {
  return (
    <View>
      <MyTextBold style={{ fontSize: 30 }}>devfinder</MyTextBold>
    </View>
  );
};

export default Header;