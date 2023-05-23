import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'contexts/Theme';
import { ProfilesProvider } from 'contexts/Profiles';
import RootNavigation from './navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ProfilesProvider>
          <RootNavigation />
        </ProfilesProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;