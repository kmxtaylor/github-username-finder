import { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
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
      <Card />
    </View>
  );

  // return (
  //   <View style={{ paddingHorizontal: 20 }}>
  //     <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>GitHub Profile Search</Text>
  //     <TextInput
  //       style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginBottom: 10 }}
  //       value={username}
  //       onChangeText={setUsername}
  //       placeholder="Enter GitHub username"
  //       autoCapitalize="none"
  //       autoCorrect={false}
  //     />
  //     <Button title="Search" onPress={searchUser} disabled={!username} />

  //     {loading ? (
  //       <ActivityIndicator size="large" style={{ marginTop: 20 }} />
  //     ) : user ? (
  //       <Card containerStyle={{ marginTop: 20 }}>
  //         <Image source={{ uri: user.avatar_url }} style={{ width: 200, height: 200, alignSelf: 'center' }} />
  //         <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>{user.login}</Text>
  //         <Text style={{ marginTop: 10, textAlign: 'center' }}>{user.name || '-'}</Text>
  //         <Text style={{ marginTop: 10, textAlign: 'center' }}>{user.bio || '-'}</Text>
  //         <Text style={{ marginTop: 10, textAlign: 'center' }}>{user.location || '-'}</Text>
  //       </Card>
  //     ) : error ? (
  //       <Text style={{ marginTop: 20, color: 'red' }}>{error}</Text>
  //     ) : null}
  //   </View>
  // );
};

export default GitHubProfile;
