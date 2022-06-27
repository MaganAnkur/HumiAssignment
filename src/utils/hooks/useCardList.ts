import {useAppSelector} from './reduxHooks';

export const useCardList = () => {
  return useAppSelector(state => state?.cards?.cards);
};
