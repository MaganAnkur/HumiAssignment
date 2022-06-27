import styled from 'styled-components/native';
import {CardName, getCardBGColor} from '../CardList/styles';
import Text from '../common/Text';
//Types
import type {Props} from './types';
//Utils
import {getCardType} from '../../../utils/helpers';

export const DetailsContainer = styled.ScrollView<Props>`
  padding-horizontal: 16px;
  flex: 1;
  ${props => {
    const cardType = getCardType(props?.cardDetails);
    const color = getCardBGColor(cardType);
    return `background-color:${color}`;
  }}
`;

export const NameText = styled(CardName)`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 24px;
  align-self: center;
`;

export const LevelRaceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  width: 300px;
  height: 300px;
  align-self: center;
  margin-bottom: 16px;
`;
export const Attribute = styled(Text)`
  margin-bottom: 16px;
`;

export const Description = styled(Text)`
  margin-bottom: 16px;
`;

export const ATKText = styled(Text)`
  align-self: flex-end;
  margin-bottom: 16px;
`;

export const SetsContainer = styled.View``;
