import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext } from 'react';

const ProfilesContext = createContext({
  profiles: [],
  setProfiles: () => {},
  activeProfile: {},
  setActiveProfile: () => {},
});

const ProfilesProvider = () => {
  const [profiles, setProfiles] = useState([]);
  const [activeProfile, setActiveProfile] = useState({});

  // update local profiles when profiles change
  useEffect(() => {
    AsyncStorage.setItem('@profiles', JSON.stringify(profiles));
  }, [profiles]);
  
  return (
    <ProfilesContext.Provider
      value={{profiles, setProfiles, activeProfile, setActiveProfile}}
    >
      {children}
    </ProfilesContext.Provider>
  );
}