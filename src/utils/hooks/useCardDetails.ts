import {useAppSelector} from './reduxHooks';

export const useCardDetails = () => {
  return useAppSelector(state => state?.cards?.cardDetails);
};
