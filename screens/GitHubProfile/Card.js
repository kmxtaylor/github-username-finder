import { View, Image, StyleSheet } from 'react-native';
import { MyText, MyTextBold } from '../../components/MyText';

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.profileTop}>
        <Image
          style={styles.avatar}
          source={require('../../assets/images/image-user-placeholder.png')}
        />
        <View
          style={styles.profileHeaderText}
        >
          <MyTextBold style={{fontSize: 22}}>Name</MyTextBold>
          <MyText style={{color: '#0079ff'}}>@username</MyText>
          <MyText>Join time</MyText>
        </View>
      </View>
      <View style={styles.bioView}>
        <MyTextBold style={{color: '#697c9a'}}>This Profile has no bio</MyTextBold>
      </View>
      <View
        style={styles.status}
      >
        <View>
          <MyText style={styles.statusLabel}>Repos</MyText>
          <MyTextBold style={styles.statusNumber}>0</MyTextBold>
        </View>
        <View>
          <MyText style={styles.statusLabel}>Followers</MyText>
          <MyTextBold style={styles.statusNumber}>1</MyTextBold>
        </View>
        <View>
          <MyText style={styles.statusLabel}>Following</MyText>
          <MyTextBold style={styles.statusNumber}>2</MyTextBold>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e2a47',
    borderRadius: 10,
    padding: 30,
    marginTop: 30,
  },
  profileTop: {
    flexDirection: 'row',
    // backgroundColor: '#1e2a47',
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  bioView: {
    marginVertical: 10,
    paddingVertical: 10,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#141d2f',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    // marginVertical: 20,
  },
  statusLabel: {
    fontSize: 12,
  },
  statusNumber: {
    fontSize: 20,
  },
});

export default Card;