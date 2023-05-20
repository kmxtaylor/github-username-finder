import { View, Image, StyleSheet } from 'react-native';
import { MyText, MyTextBold } from 'components/themed/MyText';
import LocationIcon from 'components/svgr/LocationIcon';
import TwitterIcon from 'components/svgr/TwitterIcon';
import WebsiteIcon from 'components/svgr/WebsiteIcon';
import CompanyIcon from 'components/svgr/CompanyIcon';

const Card = ({ user, error, loading }) => {
  if (loading) return null;

  else if (loading) return null;

  else if (!user) return null;

  const colorUnavailable = '#4b6a9b';

  return (
    <View style={styles.card}>
      <View style={styles.profileTop}>
        <Image
          style={styles.avatar}
          source={{ uri: user.avatar_url }}
          // source={require('../../assets/images/image-user-placeholder.png')}
        />
        <View
          style={styles.profileHeaderText}
        >
          <MyTextBold style={{fontSize: 22}}>{user.name}</MyTextBold>
          <MyText style={{color: '#0079ff'}}>@{user.login}</MyText>
          <MyText>{user.created_at}</MyText>
        </View>
      </View>
      <View style={styles.bioView}>
        <MyText style={styles.bioText}>
          {user.bio ? user.bio : 'This profile has no bio'}
        </MyText>
      </View>
      <View style={styles.status}>
        <View>
          <MyText style={styles.statusLabel}>Repos</MyText>
          <MyTextBold style={styles.statusNumber}>{user.public_repos}</MyTextBold>
        </View>
        <View>
          <MyText style={styles.statusLabel}>Followers</MyText>
          <MyTextBold style={styles.statusNumber}>{user.followers}</MyTextBold>
        </View>
        <View>
          <MyText style={styles.statusLabel}>Following</MyText>
          <MyTextBold style={styles.statusNumber}>{user.following}</MyTextBold>
        </View>
      </View>
      <View style={styles.detailsView}>
        <View style={styles.detail}>
          <LocationIcon color={user.location ? 'white': colorUnavailable} />
          <MyText
            style={{color: user.location ? 'white': colorUnavailable}}
          >{user.location ? user.location : 'Unavailable'}</MyText>
        </View>
        <View style={styles.detail}>
          <TwitterIcon color={user.twitter_username ? 'white': colorUnavailable} />
          <MyText
            style={{color: user.twitter_username ? 'white': colorUnavailable}}
          >{user.twitter_username ? user.twitter_username : 'Unavailable'}</MyText>
        </View>
        <View style={styles.detail}>
          <WebsiteIcon color={user.blog ? 'white': colorUnavailable}/>
          <MyText
            style={{color: user.blog ? 'white': colorUnavailable}}
          >{user.blog ? user.blog : 'Unavailable'}</MyText>
        </View>
        <View style={styles.detail}>
          <CompanyIcon color={user.company ? 'white': colorUnavailable}/>
          <MyText
            style={{color: user.company ? 'white': colorUnavailable}}
          >{user.company ? user.company : 'Unavailable'}</MyText>
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