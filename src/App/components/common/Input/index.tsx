import React from 'react';
import {InputContainer, StyledInput} from './styles';
import {InputProps} from './types';

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder = 'Search By Name',
}) => {
  return (
    <InputContainer>
      <StyledInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

export default Input;
