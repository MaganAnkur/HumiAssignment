import type {CardItem} from '../CardList/types';

export interface Props {
  cardDetails: CardItem;
}
export interface CardSet {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
}
