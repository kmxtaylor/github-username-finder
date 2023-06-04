import { Image, StyleSheet } from 'react-native';
import { Text, TextBold, View, ViewPlain, ViewContrast } from 'components/themed';
import LocationIcon from 'components/svgr/LocationIcon';
import TwitterIcon from 'components/svgr/TwitterIcon';
import WebsiteIcon from 'components/svgr/WebsiteIcon';
import CompanyIcon from 'components/svgr/CompanyIcon';

import useProfiles from 'hooks/useProfiles';
import useCustomTheme from 'hooks/useCustomTheme';

const Card = ({ activeUser, error, loading }) => {
  // const { activeProfile } = useProfiles();
  const { colors } = useCustomTheme();
  
  if (loading) return null;
  
  else if (loading) return null;
  
  else if (!activeUser) return null;
  
  const colorUnavailable = colors.textMidContrast;
  
  return (
    <ViewContrast style={styles.card} testID='card'>
      <ViewPlain style={styles.profileTop}>
        <Image
          style={styles.avatar}
          source={{ uri: activeUser.avatar_url }}
          // source={require('../../assets/images/image-user-placeholder.png')}
        />
        <ViewPlain
          style={styles.profileHeaderText}
        >
          <TextBold style={{fontSize: 22}}>{activeUser.name}</TextBold>
          <Text style={{color: colors.primary}}>@{activeUser.login}</Text>
          <Text>{activeUser.created_at}</Text>
        </ViewPlain>
      </ViewPlain>
      <ViewPlain style={styles.bioView}>
        <Text style={{color: colors.textMidContrast}}>
          {activeUser.bio ? activeUser.bio : 'This profile has no bio'}
        </Text>
      </ViewPlain>
      <View style={styles.status}>
        <ViewPlain>
          <Text style={styles.statusLabel}>Repos</Text>
          <TextBold style={styles.statusNumber}>{activeUser.public_repos}</TextBold>
        </ViewPlain>
        <ViewPlain>
          <Text style={styles.statusLabel}>Followers</Text>
          <TextBold style={styles.statusNumber}>{activeUser.followers}</TextBold>
        </ViewPlain>
        <ViewPlain>
          <Text style={styles.statusLabel}>Following</Text>
          <TextBold style={styles.statusNumber}>{activeUser.following}</TextBold>
        </ViewPlain>
      </View>
      <ViewPlain style={styles.detailsView}>
        <ViewPlain style={styles.detail}>
          <LocationIcon color={activeUser.location ? colors.text: colorUnavailable} />
          <Text
            style={{color: activeUser.location ? colors.text: colorUnavailable}}
          >{activeUser.location ? activeUser.location : 'Unavailable'}</Text>
        </ViewPlain>
        <ViewPlain style={styles.detail}>
          <TwitterIcon color={activeUser.twitter_username ? colors.text: colorUnavailable} />
          <Text
            style={{color: activeUser.twitter_username ? colors.text: colorUnavailable}}
          >{activeUser.twitter_username ? activeUser.twitter_username : 'Unavailable'}</Text>
        </ViewPlain>
        <ViewPlain style={styles.detail}>
          <WebsiteIcon color={activeUser.blog ? colors.text: colorUnavailable}/>
          <Text
            style={{color: activeUser.blog ? colors.text: colorUnavailable}}
          >{activeUser.blog ? activeUser.blog : 'Unavailable'}</Text>
        </ViewPlain>
        <ViewPlain style={styles.detail}>
          <CompanyIcon color={activeUser.company ? colors.text: colorUnavailable}/>
          <Text
            style={{color: activeUser.company ? colors.text: colorUnavailable}}
          >{activeUser.company ? activeUser.company : 'Unavailable'}</Text>
        </ViewPlain>
      </ViewPlain>
    </ViewContrast>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 30,
    marginTop: 30,
  },
  profileTop: {
    flexDirection: 'row',
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
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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