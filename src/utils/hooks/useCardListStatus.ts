import {useAppSelector} from './reduxHooks';

export const useCardListStatus = () => {
  return useAppSelector(state => state?.cards?.status);
};
