import { View, StyleSheet } from 'react-native'; // will replace w/ themed version
import { TextBold } from 'components/themed';

const Header = () => {
  return (
    <View style={styles.header} testID='header'>
      <TextBold style={styles.title} testID='test-header-text'>
        devfinder: Profiles
      </TextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 10,
    
  },
  title: {
    fontSize: 30 
  },
});

export default Header;