import { View } from 'react-native';
import { MyTextBold } from 'components/MyText';

const Header = ({...rest}) => {
  return (
    <View {...rest}>
      <MyTextBold style={{ fontSize: 30 }}>devfinder</MyTextBold>
    </View>
  );
};

export default Header;