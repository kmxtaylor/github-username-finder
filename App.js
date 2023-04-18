import { useFonts, useCallBack } from 'expo-font';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';

import GitHubProfile from './screens/GitHubProfile';

const App = () => {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
    'SpaceMono-Bold': require('./assets/fonts/SpaceMono-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar barStyle='light-content'></StatusBar>
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <GitHubProfile />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141d2f',
  },
  subContainer: {
    padding: 20,
  },
});

export default App;