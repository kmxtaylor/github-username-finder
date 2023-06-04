import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Main from 'layouts/Main';
import Header from './Header';
import InputArea from './InputArea';
import Card from './Card';

import useIsMountedRef from 'hooks/useIsMountedRef';
import useProfiles from 'hooks/useProfiles';

const GitHubProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [user, setUser] = useState(null);

  const isMountedRef = useIsMountedRef();
  const { activeProfile, setActiveProfile } = useProfiles();

  const fetchProfile = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  };

  const searchUser = async (username) => {
    setLoading(true);
    setError(null);
    // setUser(null);
    setActiveProfile(null);

    try {
      const response = await fetchProfile(username);
      if (isMountedRef.current) {
        // setUser(response.data);
        setActiveProfile(response.data);
      }
      console.log('User: ', response.data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    const getProfile = async () => {
      const profileFromServer = await fetchProfile('octocat');
      // setUser(profileFromServer);
      setActiveProfile(profileFromServer);
    };

    getProfile();
  }, []);

  return (
    <Main>
      <Header />
      <ScrollView keyboardShouldPersistTaps='handled'>
        <InputArea searchUser={searchUser} loading={loading} />
        <Card error={error} loading={loading} />
      </ScrollView>
    </Main>
  );
};

export default GitHubProfile;
