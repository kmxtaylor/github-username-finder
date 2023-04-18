import { TextInput, View, Pressable, StyleSheet } from 'react-native';
import { MyTextBold }  from '../../components/MyText';
import MySvg from '../../components/MySvg';

const InputArea = () => {
  return (
    <View style={styles.InputArea}>
      <View
        style={styles.input}
      >
        {/* <Image
          source={require("../../assets/images/")}
        /> */}
        <MySvg
          path={"../../assets/images/icon-search.svg"}
          style={styles.img}
        />
        <TextInput
          placeholder='Enter GitHub username'
          value={''}
          keyboardType='default'
          // onChangeText={setUsername}
          placeholderTextColor='#fff'
          // autoCapitalize='none'
          // autoCorrect={false}
        />
      </View>
      <Pressable style={styles.button}>
        <MyTextBold>Search</MyTextBold>
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
  img: {
    marginRight: 10,
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