import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'components/themed';

const Main = ({ children }) => {
  return (
    <>
      <StatusBar />
      <SafeAreaProvider style={styles.container}>
        <ScrollView
          style={styles.subContainer}
          keyboardShouldPersistTaps='handled'
        >
          {children}
        </ScrollView>
      </SafeAreaProvider>
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

export { Main };
export default Main;