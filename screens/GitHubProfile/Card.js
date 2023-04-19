import { View, Image, StyleSheet } from 'react-native';
import { MyText, MyTextBold } from '../../components/MyText';
import LocationIcon from '../../components/LocationIcon';
import TwitterIcon from '../../components/TwitterIcon';
import WebsiteIcon from '../../components/WebsiteIcon';
import CompanyIcon from '../../components/CompanyIcon';

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
        <MyTextBold style={styles.bioText}>This Profile has no bio</MyTextBold>
      </View>
      <View style={styles.status}>
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
      <View style={styles.detailsView}>
        <View style={styles.detail}>
          <LocationIcon color='white'/>
          <MyText>Location</MyText>
        </View>
        <View style={styles.detail}>
          <TwitterIcon color='white'/>
          <MyText>Twitter</MyText>
        </View>
        <View style={styles.detail}>
          <WebsiteIcon color='white'/>
          <MyText>Website</MyText>
        </View>
        <View style={styles.detail}>
          <CompanyIcon color='white'/>
          <MyText>Company</MyText>
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
    marginTop: 10,
    paddingVertical: 10,
  },
  bioText: {
    color: '#697c9a'
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#141d2f',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  statusLabel: {
    fontSize: 12,
  },
  statusNumber: {
    fontSize: 20,
  },
  detailsView: {
    marginTop: 20
  },
  detail: {
    flexDirection: 'row',
    marginVertical: 10,
    gap: 20,
  },
});

export default Card;