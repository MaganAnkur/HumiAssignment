import React from 'react';
import {ButtonProps} from './types';
import {ButtonTitle, Container} from './styles';

const Button: React.FC<ButtonProps> = ({onPress, title, disabled, style}) => {
  return (
    <Container disabled={disabled} onPress={onPress} style={style}>
      <ButtonTitle text={title} />
    </Container>
  );
};

export default Button;
