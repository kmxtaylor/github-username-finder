import { TextInput, View, Pressable, StyleSheet } from 'react-native';
import MyText from '../../components/MyText';

const InputArea = () => {
  return (
    <View style={styles.InputArea}>
      <TextInput
        style={styles.input}
        placeholder='Enter GitHub username'
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        value={'username'}
        // onChangeText={setUsername}
      />
      <Pressable style={styles.button}>
        <MyText>Search</MyText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  InputArea: {
  },
  input: {
  },
  button: {
  },
});

export default InputArea;