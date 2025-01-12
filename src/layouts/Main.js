import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'components/themed';

import { StatusBar } from 'components/themed';

import { useThemeColors } from 'hooks/useThemeColors';

const Main = ({ children }) => {
  const { colors } = useThemeColors();

  return (
    <>
      <StatusBar />
      {/* <SafeAreaProvider
        style={[styles.container, {backgroundColor: colors.background}]}
      > */}
      {/* may need to adjust element layering */}
      <SafeAreaView
        style={styles.container}
      >
        {/* <ScrollView style={{ padding: 20 }} keyboardShouldPersistTaps='handled'> */}
          {children}
        {/* </ScrollView> */}
      </SafeAreaView>
      {/* </SafeAreaProvider> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // may need to move to individual Headers and ScrollViews
  },
  // subContainer: {
  //   padding: 20,
  // },
});

export { Main };
export default Main;