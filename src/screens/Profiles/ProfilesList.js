import SwipeToDelete from './SwipeToDelete';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useProfiles from 'hooks/useProfiles';

const ProfilesList = ({ navigation, ...rest }) => {
  // one state that stores all profiles
  const { profiles, setProfiles } = useProfiles();

  // delete a user profile from the list
  const deleteProfile = (index) => {
    // update the state
    setProfiles((prevProfiles) => {
      const newProfiles = prevProfiles.filter((_, i) => i !== index);
      return newProfiles;
    });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, marginBottom: 30 }} {...rest}>
      {profiles.map((profile, i) => (
        <SwipeToDelete
          navigation={navigation}
          profile={profile}
          onDelete={() => deleteProfile(i)}
          key={i + profile.login}
        />
      ))}
    </GestureHandlerRootView>
  );
};

export default ProfilesList;
