import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native';

// import GitHubProfile from 'screens/GitHubProfile';
// import Settings from 'screens/Settings';

const Main = ({ children }) => {
  return (
    <>
      <StatusBar barStyle='light-content'></StatusBar>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.subContainer}
          // onLayout={onLayoutRootView}
          keyboardShouldPersistTaps='handled'
        >
          {children}
        </ScrollView>
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

export default Main;