import styled from 'styled-components/native';
import Text from '../Text';
//Types
import type {Props} from './types';

export const Container = styled.TouchableOpacity<Props>`
  border-radius: 4px;
  padding: 8px;
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
  ${props =>
    props.disabled ? 'background-color : grey' : 'background-color: blue'}
`;

export const ButtonTitle = styled(Text)`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;
