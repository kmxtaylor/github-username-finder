import { StyleSheet, Pressable } from 'react-native'; // will replace w/ themed version
import { TextBold, Icon, ViewPlain } from 'components/themed';

import { useProfiles } from 'hooks/useProfiles';

const Header = ({ activeUser, ...rest }) => {
  const { profiles, setProfiles } = useProfiles();

  const profileSaved = () => {
    console.log('profiles: ', profiles);
    // console.log('activeUser: ', activeUser);
    const res = profiles.some(profile => profile.name === activeUser.name);
    // console.log(res);
    return res;
  };

  const saveProfile = () => {
    setProfiles((currProfiles) => {
      return [...currProfiles, {
        login: activeUser.login,
        avatar_url: activeUser.avatar_url,
        name: activeUser.name,
      }];
    });
  };

  const unsaveProfile = () => {
    setProfiles((currProfiles) => {
      return currProfiles.filter(profile => profile.name !== activeUser.name);
    });
  };

  return (
    <ViewPlain style={styles.header} testID='header' {...rest}>
      <TextBold style={styles.title} testID='test-header-text'>
        devfinder
      </TextBold>
      { activeUser && profileSaved() ? (
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