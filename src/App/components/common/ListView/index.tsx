import React from 'react';
import {List} from './styles';
import type {ListProps} from './types';

export const ListView = <T,>({
  data,
  renderItem,
  style,
  ItemSeparatorComponent,
}: ListProps<T>) => {
  return (
    <List
      data={data}
      renderItem={renderItem}
      style={style}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};
