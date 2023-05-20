import { useEffect, useState } from 'react';
import { StyleSheet, View, Pressable, ActivityIndicator } from 'react-native';

import Main from 'layouts/Main';
import Header from './Header';
import Text from 'components/themed/Text';

const Settings = () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = (curTheme) => {
    if (curTheme !== theme) {
      setTheme(curTheme);
    }
  };

  useEffect(() => {
    // do something when theme changes
    console.log('theme updated to: ', theme);
  }, [theme]);

  return (
    <Main>
      <Header style={{ marginBottom: 40 }} />
      <Pressable style={styles.button} onPress={() => {changeTheme('light')}}>
        <View style={[
            styles.radioCircle,
            theme === 'light' ? { backgroundColor: '#0079ff' } : {}
        ]} />
        <Text style={{ fontSize: 25 }}>light</Text>
      </Pressable>
      <View style={styles.horizontalLine} />
      <Pressable style={styles.button} onPress={() => {changeTheme('dark')}}>
        <View style={[
            styles.radioCircle,
            theme === 'dark' ? { backgroundColor: '#0079ff' } : {}
        ]} />
        <Text style={{ fontSize: 25 }}>dark</Text>
      </Pressable>
    </Main>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center', // perp axis
    // justifyContent: 'center', // main axis
    gap: 10,
    marginVertical: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 50, // circle
    borderWidth: 2,
    borderColor: '#fff',
  },
  horizontalLine: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});

export default Settings;