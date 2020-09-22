import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import ServiceListItem from '../components/ServiceListItem';
import mockApi from '../mockApi';

const ProviderServicesList = ({navigation}) => {
  const [providerData, setProviderData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const getServices = React.useCallback(async () => {
    try {
      setLoading(true);
      const res = await mockApi.get('/Provider/Profile');
      if (res.ok && res.body.data) {
        setProviderData(res.body.data);
        setLoading(false);
      } else {
        throw new Error('Unable to retrieve profile');
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.log(providerData);
  }, [providerData]);

  const renderItem = ({item}) => (
    <ServiceListItem
      name={item.name}
      info={item.tags.join(', ')}
      price={item.price}
      time={item.duration / 60}
      icon={{uri: item.icon}}
      serviceType={item.type}
    />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color="#999999" />
        </View>
      ) : (
        <FlatList
          data={providerData?.services}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProviderServicesList;
