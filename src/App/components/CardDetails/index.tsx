import React from 'react';
import {CARD_TYPE} from '../../../utils/constants/CardType';
import {getCardType} from '../../../utils/helpers';
//Components
import Text from '../common/Text';
import {
  Attribute,
  DetailsContainer,
  Image,
  LevelRaceContainer,
  NameText,
  Description,
  SetsContainer,
  ATKText,
} from './styles';
//Types
import {CardSet, Props} from './types';

const CardDetails: React.FC<Props> = ({cardDetails}) => {
  const {name, race, level, card_images, desc, attribute, atk, def, card_sets} =
    cardDetails;

  const cardType = getCardType(cardDetails);
  const IS_MONSTER = cardType === CARD_TYPE.MONSTER;

  return (
    <DetailsContainer cardDetails={cardDetails}>
      <NameText text={name} />
      <LevelRaceContainer>
        {IS_MONSTER && <Text text={`Level: ${level}`} />}
        <Text text={`Race : ${race}`} />
      </LevelRaceContainer>
      <Image source={{uri: card_images?.[0]?.image_url}} />
      {IS_MONSTER && <Attribute text={`Attribute : ${attribute}`} />}
      <Description text={desc} />
      {IS_MONSTER && <ATKText text={`ATK:${atk}/DEF:${def}`} />}
      <SetsContainer>
        <Text text="Sets" />
        {renderCardSets(card_sets)}
      </SetsContainer>
    </DetailsContainer>
  );
};

const renderCardSets = (cardSets: CardSet[]) => {
  return cardSets?.map((cardSet, index) => {
    return <Text key={`card-set-${index}`} text={`• ${cardSet?.set_name}`} />;
  });
};

export default CardDetails;
