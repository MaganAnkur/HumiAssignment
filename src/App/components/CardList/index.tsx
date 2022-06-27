import React, {useCallback} from 'react';
import {ListView} from '../common/ListView';
import CardListItem from './CardListItem';
import {Separator} from './styles';
import type {CardItem, CardListProps} from './types';

const CardList = ({data}: CardListProps) => {
  const renderCardListItem = useCallback(({item}: {item: CardItem}) => {
    return <CardListItem card={item} />;
  }, []);
  const renderItemSeparator = useCallback(() => <Separator />, []);
  return (
    <ListView
      data={data}
      renderItem={renderCardListItem}
      ItemSeparatorComponent={renderItemSeparator}
    />
  );
};
export default CardList;
