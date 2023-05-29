import { StyleSheet, View } from 'react-native';
import ProfilesListItem from './ProfilesListItem';

import useProfiles from 'hooks/useProfiles';

const ProfilesList = ({ ...props }) => {
  const { profiles } = useProfiles();

  return (
    <View style={styles.list}>
      {profiles.map((profile) => (
        <ProfilesListItem key={profile.login} profile={profile} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ProfilesList;