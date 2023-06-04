import { useContext } from 'react';
import { ProfilesContext } from 'contexts/Profiles';

const useProfiles = () => {
  const { profiles, setProfiles, activeProfile, setActiveProfile } = useContext(ProfilesContext);

  return { profiles, setProfiles, activeProfile, setActiveProfile };
};

export { useProfiles };
export default useProfiles;