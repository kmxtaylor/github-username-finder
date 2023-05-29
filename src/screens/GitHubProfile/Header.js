import { View, StyleSheet, Pressable } from 'react-native'; // will replace w/ themed version
import { TextBold, Icon } from 'components/themed';

import { useProfiles } from 'hooks/useProfiles';

const Header = ({user}) => {
  const { profiles, setProfiles, activeProfile } = useProfiles();

  const profileSaved = () => {
    console.log('profiles: ', profiles);
    // console.log('activeProfile: ', activeProfile);
    const res = profiles.some(profile => profile.name === user.name);
    // console.log(res);
    return res;
  };

  const addProfile = () => {
    setProfiles((currProfiles) => {
      return [...currProfiles, {
        login: user.login,
        avatar_url: user.avatar_url,
        name: user.name,
      }];
    });
  };

  return (
    <View style={styles.header} testID='header'>
      <TextBold style={styles.title} testID='test-header-text'>
        devfinder
      </TextBold>
      { profileSaved() ? (
          <Icon name='checkmark-circle' color='green' />
        ) : (
          <Pressable onPress={addProfile}>
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