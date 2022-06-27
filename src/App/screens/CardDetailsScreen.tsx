import React from 'react';
import {useCardDetails} from '../../utils/hooks/useCardDetails';
//Components
import CardDetails from '../components/CardDetails';
//Types
import {CardDetailsScreenProps} from '../navigators/types';

const CardDetailsScreen: React.FC<CardDetailsScreenProps> = () => {
  const details = useCardDetails();
  return <CardDetails cardDetails={details} />;
};

export default CardDetailsScreen;
