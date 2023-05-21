import { View, Image, StyleSheet } from 'react-native';
import { Text, TextBold } from 'components/themed';
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
          <TextBold style={{fontSize: 22}}>{user.name}</TextBold>
          <Text style={{color: '#0079ff'}}>@{user.login}</Text>
          <Text>{user.created_at}</Text>
        </View>
      </View>
      <View style={styles.bioView}>
        <Text style={styles.bioText}>
          {user.bio ? user.bio : 'This profile has no bio'}
        </Text>
      </View>
      <View style={styles.status}>
        <View>
          <Text style={styles.statusLabel}>Repos</Text>
          <TextBold style={styles.statusNumber}>{user.public_repos}</TextBold>
        </View>
        <View>
          <Text style={styles.statusLabel}>Followers</Text>
          <TextBold style={styles.statusNumber}>{user.followers}</TextBold>
        </View>
        <View>
          <Text style={styles.statusLabel}>Following</Text>
          <TextBold style={styles.statusNumber}>{user.following}</TextBold>
        </View>
      </View>
      <View style={styles.detailsView}>
        <View style={styles.detail}>
          <LocationIcon color={user.location ? 'white': colorUnavailable} />
          <Text
            style={{color: user.location ? 'white': colorUnavailable}}
          >{user.location ? user.location : 'Unavailable'}</Text>
        </View>
        <View style={styles.detail}>
          <TwitterIcon color={user.twitter_username ? 'white': colorUnavailable} />
          <Text
            style={{color: user.twitter_username ? 'white': colorUnavailable}}
          >{user.twitter_username ? user.twitter_username : 'Unavailable'}</Text>
        </View>
        <View style={styles.detail}>
          <WebsiteIcon color={user.blog ? 'white': colorUnavailable}/>
          <Text
            style={{color: user.blog ? 'white': colorUnavailable}}
          >{user.blog ? user.blog : 'Unavailable'}</Text>
        </View>
        <View style={styles.detail}>
          <CompanyIcon color={user.company ? 'white': colorUnavailable}/>
          <Text
            style={{color: user.company ? 'white': colorUnavailable}}
          >{user.company ? user.company : 'Unavailable'}</Text>
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