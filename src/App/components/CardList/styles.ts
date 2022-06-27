import styled from 'styled-components/native';
import Text from '../common/Text';
import type {CardItem} from './types';
//Utils
import {CARD_TYPE, CARD_TYPE_COLORS} from '../../../utils/constants/CardType';
import {getCardType} from '../../../utils/helpers';

type Props = {
  item: CardItem;
};

export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row;
  padding: 8px;
  ${props => {
    const cardType = getCardType(props?.item);
    const color = getCardBGColor(cardType);
    return `background-color:${color}`;
  }}
`;

export const ImageView = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;

export const LeftView = styled.View`
  flex-shrink: 1;
  justify-content: center;
`;

export const RightView = styled.View`
  justify-content: center;
  flex: 1;
  align-items: flex-end;
`;

export const CardName = styled(Text)`
  margin-bottom: 2px;
  font-weight: bold;
`;

export const CardType = styled(Text)`
  font-size: 12px;
`;

export const Separator = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: black;
`;

//Helper
export const getCardBGColor = (cardType: string) => {
  let color = 'white';
  if (cardType === CARD_TYPE.MONSTER) {
    color = CARD_TYPE_COLORS.MONSTER;
  } else if (cardType === CARD_TYPE.SPELL) {
    color = CARD_TYPE_COLORS.SPELL;
  } else if (cardType === CARD_TYPE.TRAP) {
    color = CARD_TYPE_COLORS.TRAP;
  }
  return color;
};
