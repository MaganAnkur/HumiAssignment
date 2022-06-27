import {CARD_TYPE} from './constants/CardType';
import type {CardItem} from '../App/components/CardList/types';

export const getCardType = (card: CardItem) => {
  const type = card?.type;
  let cardType = CARD_TYPE.TRAP;
  if (type?.includes(CARD_TYPE.MONSTER)) {
    cardType = CARD_TYPE.MONSTER;
  } else if (type?.includes(CARD_TYPE.SPELL)) {
    cardType = CARD_TYPE.SPELL;
  }
  return cardType;
};
