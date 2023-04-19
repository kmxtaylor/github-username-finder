import { TextInput, View, Pressable, Image, StyleSheet } from 'react-native';
import { MyTextBold }  from '../../components/MyText';
import SearchIcon from '../../components/SearchIcon';

const InputArea = () => {
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