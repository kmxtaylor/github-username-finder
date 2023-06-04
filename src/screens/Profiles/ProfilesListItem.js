import { StyleSheet, Image } from 'react-native';

import { Text, TextBold, ViewPlain, ViewContrast } from 'components/themed';

import useProfiles from 'hooks/useProfiles';
import useCustomTheme from 'hooks/useCustomTheme';

const ProfilesListItem = ({ profile, ...rest }) => {
  const { colors } = useCustomTheme();

  return (
    <ViewContrast style={styles.card} testID='card'>
      <Image
        style={styles.avatar}
        source={{ uri: profile.avatar_url }}
      />
      <ViewPlain style={styles.profileHeaderText}>
        <TextBold style={styles.name}>{profile.name}</TextBold>
        <Text style={{color: colors.primary}}>@{profile.login}</Text>
      </ViewPlain>
    </ViewContrast>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 50, // make pic circle
  },
  name: {
    fontSize: 18,
  },
});

export default ProfilesListItem;