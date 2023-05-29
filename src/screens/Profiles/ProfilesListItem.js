import { StyleSheet, View, Image } from 'react-native';

import { Text, TextBold } from 'components/themed';

import useProfiles from 'hooks/useProfiles';

const ProfilesListItem = ({ profile, ...rest }) => {

  return (
    <View style={styles.card} testID='card'>
      {/* <View style={styles.profileTop}> */}
        <Image
          style={styles.avatar}
          source={{ uri: profile.avatar_url }}
        />
        <View style={styles.profileHeaderText}>
          <TextBold style={styles.name}>{profile.name}</TextBold>
          <Text style={styles.login}>@{profile.login}</Text>
        </View>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e2a47',
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  name: {
    fontSize: 18,
  },
  login: {
    color: '#0079ff'
  },
});

export default ProfilesListItem;