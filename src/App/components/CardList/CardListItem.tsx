import React, {useCallback} from 'react';
import {
  CardName,
  CardType,
  Container,
  ImageView,
  LeftView,
  RightView,
} from './styles';
//Types
import type {CardItem} from './types';
import type {CardDetailsScreenNavigationProp} from '../../navigators/types';
//Navigation
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../../utils/constants/navigation';
//Redux
import {getCard} from '../../redux/slices/cardSlice';
import {useAppDispatch} from '../../../utils/hooks/reduxHooks';
import {getCardType} from '../../../utils/helpers';
import {CARD_TYPE} from '../../../utils/constants/CardType';
import Text from '../common/Text';

const CardListItem = ({card}: {card: CardItem}) => {
  const navigation = useNavigation<CardDetailsScreenNavigationProp>();
  const dispatch = useAppDispatch();

  const onListItemPress = useCallback(async () => {
    dispatch(getCard(card?.id));
    navigation.navigate(SCREEN_NAMES.CARD_DETAILS);
  }, [card?.id, navigation, dispatch]);

  const IS_MONSTER = getCardType(card) === CARD_TYPE.MONSTER;

  const MonsterDetails = () => {
    return (
      <>
        <Text text={card?.level} />
        <Text text={`ATK:${card?.atk}/DEF:${card?.def}`} />
      </>
    );
  };

  return (
    <Container item={card} activeOpacity={0.9} onPress={onListItemPress}>
      <ImageView source={{uri: card?.card_images?.[0].image_url_small}} />
      <LeftView>
        <CardName text={card?.name} />
        <CardType text={card?.type} />
      </LeftView>
      <RightView>
        {IS_MONSTER ? <MonsterDetails /> : <Text text={card?.race} />}
      </RightView>
    </Container>
  );
};

export default CardListItem;
