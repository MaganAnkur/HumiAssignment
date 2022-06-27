import React from 'react';
import {StyledActivityIndicator} from './styles';
//Types
import type {Props} from './types';

const ActivityIndicator: React.FC<Props> = ({visible}) => {
  return <StyledActivityIndicator animating={visible} />;
};

export default ActivityIndicator;
