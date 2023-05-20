import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import GitHubProfile from 'screens/GitHubProfile';
import Settings from 'screens/Settings';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
			initialRouteName='GitHubProfile'
	    screenOptions={{
	       tabBarInactiveTintColor: '#4b6a9b',
	       tabBarActiveTintColor: '#0079ff',
	    }}
		>
    {/* <Tab.Screen name='GitHubProfile' ... /> */}
    {/* <Tab.Screen name='Settings' ... /> */}
		<Tab.Screen
       name='GitHubProfile'
       component={GitHubProfile}
       options={{
         title: 'GitHub Profile',
         tabBarIcon: <Ionicons name='ribbon-outline' />,
         headerShown: false,
       }}
     />
     <Tab.Screen
       name='Settings'
       component={Settings}
       options={{
         title: 'Settings',
         tabBarIcon: <Ionicons name='settings-outline' />,
         headerShown: false,
       }}
     />
    </Tab.Navigator>
  );
};

export default BottomTabs;