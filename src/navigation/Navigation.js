import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import BottomTabs from './BottomTabs';

SplashScreen.preventAutoHideAsync();

const Navigation = () => {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('/../assets/fonts/SpaceMono-Regular.ttf'),
    'SpaceMono-Bold': require('/../assets/fonts/SpaceMono-Bold.ttf'),
  });

  useEffect(() => {
    const fetchSettings = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    fetchSettings();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default Navigation;
