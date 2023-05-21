import { useState, useEffect } from 'react';
// import { View } from 'react-native';
import axios from 'axios';

import Main from 'layouts/Main';
import Header from './Header';
import InputArea from './InputArea';
import Card from './Card';

import useIsMountedRef from 'hooks/useIsMountedRef';

const GitHubProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const isMountedRef = useIsMountedRef();

  const fetchProfile = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  };

  const searchUser = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await fetchProfile(username);
      if (isMountedRef.current) {
        setUser(response);
      }
      console.log('User: ', response);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    const getProfile = async () => {
      const profileFromServer = await fetchProfile('octocat');
      setUser(profileFromServer);
    };

    getProfile();
  }, []);

  return (
    <Main>
      <Header />
      <InputArea searchUser={searchUser} loading={loading} />
      <Card user={user} error={error} loading={loading} />
    </Main>
  );
};

export default GitHubProfile;
