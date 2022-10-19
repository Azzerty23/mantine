import React, { createContext, useContext } from 'react';
import { DefaultMantineNumberSize } from '@mantine/styles';

interface ContextValue {
  spacing: DefaultMantineNumberSize;
}

const AvatarGroupContext = createContext<ContextValue>(null);

interface AvatarGroupProviderProps extends ContextValue {
  children: React.ReactNode;
}

export function AvatarGroupProvider({ spacing, children }: AvatarGroupProviderProps) {
  return <AvatarGroupContext.Provider value={{ spacing }}>{children}</AvatarGroupContext.Provider>;
}

export function useAvatarGroupContext() {
  const ctx = useContext(AvatarGroupContext);

  if (ctx) {
    return { ...ctx, withinGroup: true };
  }

  return { spacing: null, withinGroup: false };
}
