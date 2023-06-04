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
  const [user, setUser] = useState(null);

  const isMountedRef = useIsMountedRef();
  const { activeUsername, setActiveUsername, setProfiles } = useProfiles();

  const fetchProfile = async () => {
    // const response = await axios.get(`https://api.github.com/users/${username}`);
    const response = await axios.get(`https://api.github.com/users/${activeUsername}`);
    return response.data;
  };

  useEffect(() => {
    const preloadProfile = async () => {
      const profileFromServer = await fetchProfile();
      // setUser(profileFromServer);
      setUser(profileFromServer);
      setActiveUsername(profileFromServer.login);
    };

    preloadProfile();
  }, []);

  const searchUser = async () => {
    setLoading(true);
    setError(null);
    setUser(null);
    // setActiveProfile(null);
    // console.log('username searched˙', username);

    try {
      const responseData = await fetchProfile();
      if (isMountedRef.current) {
        setUser(responseData);
        // setActiveProfile(responseData);
      }
      // console.log('Fetched user: ', responseData);
    } catch (error) {
      console.error(error);
      console.error(JSON.stringify(error, null, 2));
      setError(error.message);
    }

    setLoading(false);
  };

  // when activeUsername changes, fetch the corresponding profile
  useEffect(() => {
    if (activeUsername) {
      // console.log('activeUsername changed: ', activeUsername);
      searchUser(activeUsername);
    }
  }, [activeUsername]);

  return (
    <Main>
      <Header activeUser={user} />
      <ScrollView keyboardShouldPersistTaps='handled'>
        <InputArea searchUser={searchUser} loading={loading} />
        <Card activeUser={user} error={error} loading={loading} />
      </ScrollView>
    </Main>
  );
};

export default GitHubProfile;
