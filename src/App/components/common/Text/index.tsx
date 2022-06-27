import React from 'react';
import {StyledText} from './styles';
import {TextProps} from './types';

const Text = ({text, style}: TextProps) => {
  return <StyledText style={style}>{text}</StyledText>;
};

export default Text;
