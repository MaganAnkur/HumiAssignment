import {StyleProp, ViewProps} from 'react-native';

export interface Props {
  onPress: () => void;
  style?: StyleProp<ViewProps>;
  disabled?: boolean;
}

export interface ButtonProps extends Props {
  title: string;
}
