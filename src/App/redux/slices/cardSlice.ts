import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from '../../../utils/api';
import {CardItem} from '../../components/CardList/types';

export interface CardsState {
  cards: CardItem[];
  status: string;
  cardDetails: CardItem;
}

const initialState: CardsState = {
  cards: [],
  status: '',
  cardDetails: {
    id: 0,
    name: '',
    type: '',
    desc: '',
    atk: 0,
    def: 0,
    level: 0,
    attribute: '',
    race: '',
    archetype: '',
    card_sets: [],
    card_images: [],
    card_prices: [],
  },
};

export const getCardsByName = createAsyncThunk(
  'cards/getCardsByName',
  async (cardName: string, {dispatch}) => {
    const resp = await AxiosInstance.get(`?fname=${cardName}`);
    const cards = resp?.data?.data;
    dispatch(setCards(cards));
  },
);

export const getCard = createAsyncThunk(
  'cards/getCard',
  async (cardId: number, {dispatch}) => {
    const resp = await AxiosInstance.get(`?id=${cardId}`);
    const cardDetails = resp?.data?.data?.[0];
    dispatch(setCardDetails(cardDetails));
  },
);

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setCardDetails: (state, action) => {
      state.cardDetails = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCardsByName.pending, (state, _action) => {
      state.status = 'loading';
    });
    builder.addCase(getCardsByName.fulfilled, (state, _action) => {
      state.status = 'success';
    });
    builder.addCase(getCardsByName.rejected, (state, _action) => {
      state.status = 'error';
      state.cards = [];
    });
  },
});
export const {setCards, setCardDetails} = cardSlice.actions;
export default cardSlice.reducer;
