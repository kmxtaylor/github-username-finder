import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState, useEffect } from 'react';

const ProfilesContext = createContext({
  profiles: [],
  setProfiles: () => {},
  activeUsername: 'octocat',
  setActiveUsername: () => {},
});

const ProfilesProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [activeUsername, setActiveUsername] = useState('octocat');

  // update local profiles when profiles change
  useEffect(() => {
    AsyncStorage.setItem('@profiles', JSON.stringify(profiles));
  }, [profiles]);

  // get all profiles from async storage when app loads
  useEffect(() => {
    const getProfiles = async () => {
      const profiles = await AsyncStorage.getItem('@profiles');
      if (profiles) {
        setProfiles(JSON.parse(profiles));
      }
    };
    getProfiles();
  }, []);
  
  return (
    <ProfilesContext.Provider
      value={{profiles, setProfiles, activeUsername, setActiveUsername}}
    >
      {children}
    </ProfilesContext.Provider>
  );
}

export { ProfilesContext, ProfilesProvider };