import { useContext } from 'react';
import { ProfilesContext } from 'contexts/Profiles';

const useProfiles = () => {
  const { profiles, setProfiles, activeUsername, setActiveUsername} = useContext(ProfilesContext);

  return { profiles, setProfiles, activeUsername, setActiveUsername};
};

export { useProfiles };
export default useProfiles;