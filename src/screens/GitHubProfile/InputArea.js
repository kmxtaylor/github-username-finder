import { useState } from 'react';
import { TextInput, View, Pressable, StyleSheet } from 'react-native';
import { TextBold }  from 'components/themed';
import SearchIcon from 'components/svgr/SearchIcon';

const InputArea = ({ searchUser, loading }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    // console.log('submitting username: ', username);
    searchUser(username); // async, but don't need to wait for its completion
  };

  return (
    <View style={styles.InputArea}>
      <View
        style={styles.input}
      >
        <SearchIcon style={styles.searchIcon}/>
        {/* <Image
          source={require("../../assets/images/icon-search.png")}
          style={styles.searchIcon}
        /> */}
        <TextInput
          placeholder='Enter GitHub username'
          value={username}
          keyboardType='default'
          onChangeText={setUsername}
          placeholderTextColor={'#fff'}
          // autoCapitalize='none'
          // autoCorrect={false}
          style={{color: '#fff', fontFamily: 'SpaceMono-Regular'}}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={handleSubmit}
        disabled={username === '' || loading}
      >
        <TextBold>Search</TextBold>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  InputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // only applies to direct children
    backgroundColor: '#1e2a47',
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  input: {
    // backgroundColor: '#',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    // width: 30,
    // height: 30,
    marginRight: 10,
    // marginVertical: 20,
  },
  button: {
    height: 45,
    width: 80,
    backgroundColor: '#0079ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputArea;