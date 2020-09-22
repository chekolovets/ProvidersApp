import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {connect} from 'react-redux';

import {saveData} from '../redux/actions';
import ProviderOverview from './ProviderOverview';
import ProviderServicesList from './ProviderServicesList';
import NavigationbarHeaderWithExpandedImage from '../components/NavigationbarHeaderWithExpandedImage';
import TopTabbarComponent from '../components/TopTabbarComponent';
import mockApi from '../mockApi';

const ProviderDetailScreen = ({navigation, route, saveData, state}) => {
  const [loading, setLoading] = React.useState(false);
  //navigation setup
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: ({scene, previous}) => {
        return (
          <>
            <SafeAreaView />
            <NavigationbarHeaderWithExpandedImage
              scene={scene}
              previous={previous}
              navigation={navigation}
              backgroundImage={state?.profile?.backgroundImage}
            />
          </>
        );
      },
    });
  }, [navigation, state]);

  //get results from API
  const getServices = React.useCallback(async () => {
    try {
      setLoading(true);
      const res = await mockApi.get('/Provider/Profile');
      if (res.ok && res.body.data) {
        console.log(res.body.data);
        // use this data in overview and service list
        saveData(res.body.data);
        setLoading(false);
      } else {
        throw new Error('Unable to retrieve profile');
      }
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <TopTabbarComponent
        items={[
          {title: 'Overview', component: ProviderOverview},
          {
            title: 'Services',
            component: ProviderServicesList,
          },
          {
            title: 'Reviews',
            component: View,
          },
        ]}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = {saveData};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProviderDetailScreen);
