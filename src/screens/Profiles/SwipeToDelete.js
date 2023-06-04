import { Image, Animated, StyleSheet } from 'react-native';
import { ViewPlain, ViewContrast, Text, Icon } from 'components/themed';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

import { useProfiles } from 'hooks/useProfiles';
import { useCustomTheme } from 'hooks/useCustomTheme';

const SwipeToDelete = ({ navigation, profile, onDelete }) => {
  const { setActiveUsername } = useProfiles();
  const { colors } = useCustomTheme();

  const renderRightActions = (_, dragX) => {
    const transX = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    return (
      <RectButton style={[styles.deleteBtn, {backgroundColor: colors.deleteBtn}]} onPress={onDelete}>
        <Animated.Text
          style={[styles.buttonText, { transform: [{ translateX: transX }] }]}
        >
          <Icon name='trash-outline' color={colors.text} size={25} />
        </Animated.Text>
      </RectButton>
    );
  };

  const renderLeftActions = (_, dragX) => {
    const transX = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [-100, 0],
      extrapolate: 'clamp',
    });

    return (
      <RectButton
        style={[styles.accessBtn, {backgroundColor: colors.accessBtn}]}
        onPress={() => {
          setActiveUsername(profile.login);
          // console.log('new activeUsername:', profile.login);
          navigation.navigate('GitHubProfile');
        }}
      >
        <Animated.Text
          style={[styles.buttonText, { transform: [{ translateX: transX }] }]}
        >
          <Icon name='ribbon-outline' color={colors.text} size={25} />
        </Animated.Text>
      </RectButton>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <ViewContrast style={styles.card}>
        <Image source={{ uri: profile.avatar_url }} style={styles.avatar} />
        <ViewPlain style={styles.generalInfo}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={{color: colors.primary}}>@{profile.login}</Text>
        </ViewPlain>
      </ViewContrast>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  deleteBtn: {
    width: 100,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f00',
  },
  accessBtn: {
    width: 100,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#006400',
  },
  buttonText: {
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  generalInfo: {
    marginLeft: 30,
  },
  avatar: {
    width: 80,
    borderRadius: 50,
    height: 80,
    maxWidth: 80,
    maxHeight: 80,
  },
});

export default SwipeToDelete;
