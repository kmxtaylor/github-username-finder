import { useState, useEffect } from 'react';
// import { View } from 'react-native';

import Main from 'layouts/Main';
import Header from './Header';

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


  return (
    <Main>
      <Header />
      
    </Main>
  );
};

export default GitHubProfile;
