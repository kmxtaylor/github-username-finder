import { useState } from 'react';
import { TextInput, Pressable, StyleSheet } from 'react-native';
import { TextBold, ViewContrast, ViewPlain }  from 'components/themed';
import SearchIcon from 'components/svgr/SearchIcon';

import useCustomTheme from 'hooks/useCustomTheme';
import useProfiles from 'hooks/useProfiles';

const InputArea = ({ searchUser, loading }) => {
  const { colors } = useCustomTheme();
  const [username, setUsername] = useState('');

  const { setActiveUsername } = useProfiles();

  const handleSubmit = () => {
    console.log('submitting username: ', username);
    setActiveUsername(username);
    // searchUser(username); // async, but don't need to wait for its completion
  };

  return (
    <ViewContrast style={styles.InputArea}>
      <ViewPlain
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
          placeholderTextColor={colors.textMidContrast}s
          // autoCapitalize='none'
          // autoCorrect={false}
          style={{color: colors.text, fontFamily: 'SpaceMono-Regular'}}
        />
      </ViewPlain>
      <Pressable
        style={[styles.button, {backgroundColor: colors.primary}]}
        onPress={handleSubmit}
        disabled={username === '' || loading}
      >
        <TextBold>Search</TextBold>
      </Pressable>
    </ViewContrast>
  );
};

const styles = StyleSheet.create({
  InputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // only applies to direct children
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  input: {
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
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputArea;