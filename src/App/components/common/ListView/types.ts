import type {
  ListRenderItem,
  FlatListProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface ListProps<T> extends FlatListProps<T> {
  renderItem: ListRenderItem<T>;
  iItemSeparatorComponent?: ListRenderItem<T>;
  data: T[];
  style?: StyleProp<ViewStyle>;
}
