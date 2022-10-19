import type { DefaultMantineNumberSize } from '@mantine/styles';
import { createContext, useContext } from 'react';

interface GridContextValue {
  gutter: DefaultMantineNumberSize;
  grow: boolean;
  columns: number;
}

const GridContext = createContext<GridContextValue>(null);

export const GridProvider = GridContext.Provider;
export const useGridContext = () => useContext(GridContext);
