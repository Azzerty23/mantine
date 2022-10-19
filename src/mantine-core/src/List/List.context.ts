import { createContext, useContext } from 'react';
import { DefaultMantineNumberSize } from '@mantine/styles';

interface ListContextValue {
  spacing?: DefaultMantineNumberSize;
  center?: boolean;
  icon?: React.ReactNode;
  listStyleType?: string;
  withPadding?: boolean;
  size?: DefaultMantineNumberSize;
}

export const ListContext = createContext<ListContextValue>(null);

export function useListContext(): ListContextValue {
  return useContext(ListContext) || {};
}
