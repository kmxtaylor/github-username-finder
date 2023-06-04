import { Image, StyleSheet } from 'react-native';
import { Text, TextBold, View, ViewPlain, ViewContrast } from 'components/themed';
import LocationIcon from 'components/svgr/LocationIcon';
import TwitterIcon from 'components/svgr/TwitterIcon';
import WebsiteIcon from 'components/svgr/WebsiteIcon';
import CompanyIcon from 'components/svgr/CompanyIcon';

import useProfiles from 'hooks/useProfiles';

const Card = ({ error, loading }) => {
  const { activeProfile } = useProfiles();
  
  if (loading) return null;
  
  else if (loading) return null;
  
  else if (!activeProfile) return null;
  
  const colorUnavailable = '#4b6a9b';
  
  
  return (
    <ViewContrast style={styles.card} testID='card'>
      <ViewPlain style={styles.profileTop}>
        <Image
          style={styles.avatar}
          source={{ uri: activeProfile.avatar_url }}
          // source={require('../../assets/images/image-user-placeholder.png')}
        />
        <ViewPlain
          style={styles.profileHeaderText}
        >
          <TextBold style={{fontSize: 22}}>{activeProfile.name}</TextBold>
          <Text style={{color: '#0079ff'}}>@{activeProfile.login}</Text>
          <Text>{activeProfile.created_at}</Text>
        </ViewPlain>
      </ViewPlain>
      <ViewPlain style={styles.bioView}>
        <Text style={styles.bioText}>
          {activeProfile.bio ? activeProfile.bio : 'This profile has no bio'}
        </Text>
      </ViewPlain>
      <View style={styles.status}>
        <ViewPlain>
          <Text style={styles.statusLabel}>Repos</Text>
          <TextBold style={styles.statusNumber}>{activeProfile.public_repos}</TextBold>
        </ViewPlain>
        <ViewPlain>
          <Text style={styles.statusLabel}>Followers</Text>
          <TextBold style={styles.statusNumber}>{activeProfile.followers}</TextBold>
        </ViewPlain>
        <ViewPlain>
          <Text style={styles.statusLabel}>Following</Text>
          <TextBold style={styles.statusNumber}>{activeProfile.following}</TextBold>
        </ViewPlain>
      </View>
      <ViewPlain style={styles.detailsView}>
        <ViewPlain style={styles.detail}>
          <LocationIcon color={activeProfile.location ? 'white': colorUnavailable} />
          <Text
            style={{color: activeProfile.location ? 'white': colorUnavailable}}
          >{activeProfile.location ? activeProfile.location : 'Unavailable'}</Text>
        </ViewPlain>
        <ViewPlain style={styles.detail}>
          <TwitterIcon color={activeProfile.twitter_username ? 'white': colorUnavailable} />
          <Text
            style={{color: activeProfile.twitter_username ? 'white': colorUnavailable}}
          >{activeProfile.twitter_username ? activeProfile.twitter_username : 'Unavailable'}</Text>
        </ViewPlain>
        <ViewPlain style={styles.detail}>
          <WebsiteIcon color={activeProfile.blog ? 'white': colorUnavailable}/>
          <Text
            style={{color: activeProfile.blog ? 'white': colorUnavailable}}
          >{activeProfile.blog ? activeProfile.blog : 'Unavailable'}</Text>
        </ViewPlain>
        <ViewPlain style={styles.detail}>
          <CompanyIcon color={activeProfile.company ? 'white': colorUnavailable}/>
          <Text
            style={{color: activeProfile.company ? 'white': colorUnavailable}}
          >{activeProfile.company ? activeProfile.company : 'Unavailable'}</Text>
        </ViewPlain>
      </ViewPlain>
    </ViewContrast>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: '#1e2a47',
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
    borderRadius: 50, // make pic circle
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
    // backgroundColor: '#141d2f',
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