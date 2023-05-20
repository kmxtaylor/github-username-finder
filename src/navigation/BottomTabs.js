import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

import GitHubProfile from 'screens/GitHubProfile';
import Settings from 'screens/Settings';

const Tab = createBottomTabNavigator();

// const TabIcon = (name) => {
//  return <Ionicons name={name} />;
// };

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
        // tabBarIcon: (props) => (
        //   <Ionicons name='ribbon-outline' {...props} />
        // ),
        // tabBarIcon: () => TabIcon('ribbon-outline'),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name='Settings'
      component={Settings}
      options={{
        title: 'Settings',
        // tabBarIcon: (props) => (
        //   <Ionicons name='settings-outline' {...props} />
        // ),
      //  tabBarIcon: () => TabIcon('settings-outline'),
        headerShown: false,
      }}
    />
    </Tab.Navigator>
  );
};

export default BottomTabs;