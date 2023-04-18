import { useFonts, useCallBack } from 'expo-font';
import { SafeAreaView } from 'react-native';

import GitHubProfile from './screens/GitHubProfile';

const App = () => {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
    'SpaceMono-Bold': require('./assets/fonts/SpaceMono-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView>
      <GitHubProfile />
    </SafeAreaView>
  );
};

export default App;