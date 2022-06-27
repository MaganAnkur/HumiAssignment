import {SCREEN_NAMES} from '../../utils/constants/navigation';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  [SCREEN_NAMES.CARDS_LIST]: undefined;
  [SCREEN_NAMES.CARD_DETAILS]: undefined;
};

export type CardListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CardList'
>;

export type CardDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CardDetails'
>;

export type CardDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CardDetails'
>;
