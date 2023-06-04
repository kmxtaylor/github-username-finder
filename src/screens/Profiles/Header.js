import { StyleSheet } from 'react-native'; // will replace w/ themed version
import { TextBold, ViewPlain } from 'components/themed';

const Header = () => {
  return (
    <ViewPlain style={styles.header} testID='header'>
      <TextBold style={styles.title} testID='test-header-text'>
        devfinder: Profiles
      </TextBold>
    </ViewPlain>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 10,
    // paddingBottom: 50,
  },
  title: {
    fontSize: 30 
  },
});

export default Header;