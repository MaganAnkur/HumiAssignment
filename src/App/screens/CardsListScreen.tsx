import React from 'react';
//Components
import CardList from '../components/CardList';
import ActivityIndicator from '../components/common/ActivityIndicator';
//Utils
import {useCardListStatus} from '../../utils/hooks/useCardListStatus';
import {FETCH_STATUS} from '../../utils/constants/FetchStatus';
import {useCardList} from '../../utils/hooks/useCardList';
import SearchBar from '../components/SearchBar';

const CardsListScreen = () => {
  const status = useCardListStatus();
  const cards = useCardList();
  const isFetching = status === FETCH_STATUS.LOADING;

  return (
    <>
      {isFetching && <ActivityIndicator visible={isFetching} />}
      <SearchBar />
      <CardList data={cards} />
    </>
  );
};

export default CardsListScreen;
