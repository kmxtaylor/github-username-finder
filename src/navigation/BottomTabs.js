import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import GitHubProfile from 'screens/GitHubProfile';
import Profiles from 'screens/Profiles';
import Settings from 'screens/Settings';

import { useCustomTheme } from 'hooks/useCustomTheme';
import { useThemeColors } from 'hooks/useThemeColors';

const TabBarIcon = ({ name, size=25, color }) => (
  <Ionicons name={name} size={size} color={color} />
);

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { theme } = useCustomTheme();
  const { colors } = useThemeColors();

  return (
    <Tab.Navigator
			initialRouteName='GitHubProfile'
	    screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMidContrast,
        // tabBarActiveTintColor: colors.tabBarActive,
        // tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarStyle: {
          backgroundColor: colors.backgroundSecondary,
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
          // justifyContent: 'center',
          // rowGap: 10,
          // columnGap: 5,
          // paddingVertical: 10,
          // marginVertical: 10,
        },
	    }}
		>
		<Tab.Screen
      name='GitHubProfile'
      component={GitHubProfile}
      options={{
        title: 'GitHub Profile',
        tabBarIcon: (props) => (
          <TabBarIcon name='ribbon-outline' {...props} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name='Profiles'
      component={Profiles}
      options={{
        title: 'Profiles',
        tabBarIcon: (props) => (
          <TabBarIcon name='apps-outline' {...props} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name='Settings'
      component={Settings}
      options={{
        title: 'Settings',
        tabBarIcon: (props) => (
          <TabBarIcon name='settings-outline' {...props} />
        ),
        headerShown: false,
      }}
    />
    </Tab.Navigator>
  );
};

export default BottomTabs;