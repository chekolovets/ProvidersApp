import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import TitleText from '../components/TitleText';
import RegularText from '../components/RegularText';
import {
  BORDER,
  WHITE,
  ACCENT,
  MILD_GREY,
  PRIMARY,
  BORDER_GREY,
} from '../lib/colors';
import RoundIndicator from '../components/RoundIndicator';
import LightText from '../components/LightText';
import MediumText from '../components/MediumText';
import {connect} from 'react-redux';

const skills = ['Yoga', 'Boxing', 'Judo', 'Diet Planning', 'Diet Plannings'];

const ProviderOverview = ({navigation, profile, services}) => {
  const isTextLong = React.useMemo(
    () => profile?.description && profile?.description.length >= 400,
    [profile],
  );
  const [isOpen, toggleOpen] = React.useState(false);

  const renderSkill = ({name}) => (
    <View style={styles.skillContainer} key={name}>
      <RegularText>{name}</RegularText>
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={!profile && styles.loadingContainer}>
      {!profile ? (
        <ActivityIndicator size="large" color="#999999" />
      ) : (
        <>
          <View style={styles.topWrapper}>
            <View>
              <TitleText labelStyle={styles.title} numberOfLines={2}>
                {profile?.displayName}
              </TitleText>
              <View style={styles.infoContainer}>
                <Icon name="map-marker-alt" size={15} style={styles.infoIcon} />
                <RegularText
                  style={styles.infoText}
                  onPress={() => Linking.openURL(profile?.location?.placesUrl)}>
                  {profile?.location?.name}
                </RegularText>
              </View>
              <View style={styles.infoContainer}>
                <Icon name="comment-alt" size={15} style={styles.infoIcon} />
                <RegularText
                  style={styles.infoText}
                  onPress={() => navigation.push('PROVIDER_MESSAGE')}>
                  Send a message
                </RegularText>
              </View>
            </View>
            <View style={styles.scoreContainer}>
              <View style={styles.score}>
                <Icon name="star" color={WHITE} backgroundColor={WHITE} solid />
                <RegularText style={styles.scoreText}>
                  {profile?.averageRating?.toFixed(1)}
                </RegularText>
              </View>
            </View>
          </View>
          <View style={styles.indicatorsContainer}>
            <RoundIndicator number={profile?.bookings} title="Booking" />
            <RoundIndicator number={profile?.favourites} title="Favourites" />
            <RoundIndicator number={profile?.friends} title="Friends" />
          </View>
          <View style={[styles.textContainer]}>
            <LightText
              labelStyle={!isOpen && !!isTextLong && styles.closedHeight}>
              {profile?.description}
            </LightText>
            {isTextLong && (
              <View style={[styles.textBottomContainer]}>
                {!isOpen && (
                  <LinearGradient
                    colors={[
                      'rgba(255, 255, 255, 0)',
                      'rgba(255, 255, 255, 1)',
                    ]}
                    style={styles.linearGradient}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                  />
                )}
                <Pressable
                  style={styles.buttonContainer}
                  onPress={() => toggleOpen(!isOpen)}>
                  <MediumText labelStyle={styles.buttonText}>
                    {isOpen ? 'Read Less' : 'Read More'}
                  </MediumText>
                </Pressable>
              </View>
            )}
          </View>
          <View style={styles.skillsContainer}>
            <RegularText labelStyle={styles.skillsTitle}>Skills</RegularText>
            <View style={styles.skillsWrapper}>
              {services?.map((item) => renderSkill({name: item.name}))}
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  topWrapper: {
    paddingHorizontal: 17,
    paddingVertical: 15,
    flexDirection: 'row',
    shadowColor: BORDER,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    backgroundColor: WHITE,
    zIndex: 999,
  },
  scoreContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  score: {
    flexDirection: 'row',
    backgroundColor: ACCENT,
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 25,
    paddingBottom: 11,
    maxWidth: 250,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingVertical: 3,
  },
  infoText: {
    fontSize: 12,
  },
  infoIcon: {
    width: 25,
    textAlign: 'left',
  },
  scoreText: {
    fontSize: 12,
    paddingLeft: 5,
  },
  indicatorsContainer: {
    paddingHorizontal: 17,
    paddingTop: 18,
    paddingBottom: 12,
    backgroundColor: MILD_GREY,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonText: {
    color: PRIMARY,
  },
  textContainer: {
    paddingHorizontal: 25,
    paddingTop: 8,
    paddingBottom: 50,
    shadowColor: BORDER,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    backgroundColor: WHITE,
    zIndex: 998,
  },
  linearGradient: {
    height: 52,
  },
  textBottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 30,
  },
  closedHeight: {
    height: 160,
  },
  skillsContainer: {
    paddingHorizontal: 25,
    paddingVertical: 16,
    shadowColor: BORDER,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 1,
    shadowOpacity: 1,
    backgroundColor: WHITE,
    zIndex: 997,
  },
  skillsTitle: {},
  skillContainer: {
    marginTop: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginHorizontal: 3,
    borderColor: BORDER_GREY,
    borderWidth: 1,
  },
  skillsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({
  profile: state.profile,
  services: state.services,
});

export default connect(mapStateToProps)(ProviderOverview);
