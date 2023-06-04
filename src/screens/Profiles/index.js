import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import Main from 'layouts/Main';
import Header from './Header';
import ProfilesList from './ProfilesList';

const Profiles = ({ navigation }) => {
  return (
    <Main>
      <Header />
      <ScrollView style={{ paddingVertical: 20 }} keyboardShouldPersistTaps='handled'>
        <ProfilesList navigation={navigation} />
      </ScrollView>
    </Main>
  );
};

export default Profiles;
