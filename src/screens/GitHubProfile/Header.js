import { StyleSheet, Pressable } from 'react-native'; // will replace w/ themed version
import { TextBold, Icon, ViewPlain } from 'components/themed';

import { useProfiles } from 'hooks/useProfiles';

const Header = () => {
  const { profiles, setProfiles, activeProfile } = useProfiles();

  const profileSaved = () => {
    console.log('profiles: ', profiles);
    // console.log('activeProfile: ', activeProfile);
    const res = profiles.some(profile => profile.name === activeProfile.name);
    // console.log(res);
    return res;
  };

  const saveProfile = () => {
    setProfiles((currProfiles) => {
      return [...currProfiles, {
        login: activeProfile.login,
        avatar_url: activeProfile.avatar_url,
        name: activeProfile.name,
      }];
    });
  };

  const unsaveProfile = () => {
    setProfiles((currProfiles) => {
      return currProfiles.filter(profile => profile.name !== activeProfile.name);
    });
  };

  return (
    <ViewPlain style={styles.header} testID='header'>
      <TextBold style={styles.title} testID='test-header-text'>
        devfinder
      </TextBold>
      { activeProfile && profileSaved() ? (
          <Pressable onPress={unsaveProfile}>
            <Icon name='checkmark-circle' color='green' />
          </Pressable>
        ) : (
          <Pressable onPress={saveProfile}>
            <Icon name='add-circle-outline' />
          </Pressable>
        )
      }
    </ViewPlain>
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