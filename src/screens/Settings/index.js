import { useEffect, useState } from 'react';
import { StyleSheet, View, Pressable, ActivityIndicator } from 'react-native';

import Header from './Header';
import MyText from 'components/MyText';

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
    <View>
      <Header style={{ marginBottom: 40 }} />
      <Pressable style={styles.button} onPress={() => {changeTheme('light')}}>
        <View style={[
            styles.radioCircle,
            theme === 'light' ? { backgroundColor: '#0079ff' } : {}
        ]} />
        <MyText style={{ fontSize: 25 }}>light</MyText>
      </Pressable>
      <View style={styles.horizontalLine} />
      <Pressable style={styles.button} onPress={() => {changeTheme('dark')}}>
        <View style={[
            styles.radioCircle,
            theme === 'dark' ? { backgroundColor: '#0079ff' } : {}
        ]} />
        <MyText style={{ fontSize: 25 }}>dark</MyText>
      </Pressable>
    </View>
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