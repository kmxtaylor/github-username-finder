import { useState } from 'react';
import { StyleSheet, View, Pressable, ActivityIndicator } from 'react-native';

import Header from './Header';
import MyText from 'components/MyText';

const Settings = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <View>
      <Header style={{ marginBottom: 40 }} />
      <Pressable style={styles.button}>
        <View style={styles.radioCircle} />
        <MyText style={{ fontSize: 25 }}>light</MyText>
      </Pressable>
      <View style={styles.horizontalLine} />
      <Pressable style={styles.button}>
        <View style={styles.radioCircle} />
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