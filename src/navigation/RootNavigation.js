import { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import BottomTabs from './BottomTabs';

import useTheme from 'hooks/useTheme';

SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('/../assets/fonts/SpaceMono-Regular.ttf'),
    'SpaceMono-Bold': require('/../assets/fonts/SpaceMono-Bold.ttf'),
  });

  const { colors } = useTheme();

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors, // imports all colors from theme set to default
      // primary: colors.primary,
      // background: colors.background,
      // text: colors.text,
    },
  };

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
    <NavigationContainer theme={navigationTheme}>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigation;
