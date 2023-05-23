import { View, StyleSheet, Pressable } from 'react-native'; // will replace w/ themed version
import { TextBold, Icon } from 'components/themed';

import { useProfiles } from 'hooks/useProfiles';

const Header = () => {
  const { profiles, activeProfile } = useProfiles();

  const profileSaved = () => {
    const res = profiles.some(profile => profile.name === activeProfile);
    // console.log(res);
    return res;
  };

  return (
    <View style={styles.header} testID='header'>
      <TextBold style={styles.title} testID='test-header-text'>
        devfinder
      </TextBold>
      { profileSaved() ? (
          <Icon name='checkmark-circle' color='green' />
        ) : (
          <Pressable>
            <Icon name='add-circle-outline' />
          </Pressable>
        )
      }
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