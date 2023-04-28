import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import GitHubProfile from './screens/GitHubProfile';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
    'SpaceMono-Bold': require('./assets/fonts/SpaceMono-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle='light-content'></StatusBar>
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer} onLayout={onLayoutRootView}>
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