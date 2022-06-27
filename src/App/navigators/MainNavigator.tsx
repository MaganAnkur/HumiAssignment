import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardsListScreen from '../screens/CardsListScreen';
import CardDetailsScreen from '../screens/CardDetailsScreen';
import {SCREEN_NAMES} from '../../utils/constants/navigation';
import type {RootStackParamList} from './types';

const MainStack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName={SCREEN_NAMES.CARDS_LIST}>
      <MainStack.Screen
        component={CardsListScreen}
        name={SCREEN_NAMES.CARDS_LIST}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        component={CardDetailsScreen}
        name={SCREEN_NAMES.CARD_DETAILS}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
