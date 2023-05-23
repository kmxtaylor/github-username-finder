import { View, StyleSheet, Pressable } from 'react-native'; // will replace w/ themed version
import { TextBold, Icon } from 'components/themed';

const Header = () => {
  return (
    <View style={styles.header} testID='header'>
      <TextBold style={styles.title} testID='test-header-text'>
        devfinder
      </TextBold>
      <Pressable>
        <Icon name='add-circle-outline' />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 10,
    // paddingBottom: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30 
  },
});

export default Header;