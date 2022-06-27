import React, {useCallback, useState} from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import {SearchContainer} from './styles';
//Redux
import {useAppDispatch} from '../../../utils/hooks/reduxHooks';
import {getCardsByName} from '../../redux/slices/cardSlice';

const SearchBar: React.FC<{}> = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const onSearch = useCallback(() => {
    dispatch(getCardsByName(value));
    setValue('');
  }, [dispatch, value]);

  return (
    <SearchContainer>
      <Input value={value} onChangeText={setValue} />
      <Button title="Search" onPress={onSearch} disabled={!value} />
    </SearchContainer>
  );
};

export default SearchBar;
