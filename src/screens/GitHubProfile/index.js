import { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
// import { Image } from 'react-native-elements';
import axios from 'axios';

import Header from './Header';
import InputArea from './InputArea';
import Card from './Card';

const GitHubProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const searchUser = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
      console.log('User: ', response.data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <View>
      <Header />
      <InputArea searchUser={searchUser} loading={loading} />
      <Card user={user} error={error} loading={loading} />
    </View>
  );
};

export default GitHubProfile;
