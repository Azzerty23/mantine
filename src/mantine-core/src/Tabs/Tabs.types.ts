import { MantineColor, DefaultMantineNumberSize } from '@mantine/styles';

export type TabsValue = string | null;
export type TabsOrientation = 'horizontal' | 'vertical';
export type TabsVariant = 'default' | 'outline' | 'pills';
export type TabsPosition = 'left' | 'center' | 'right' | 'apart';
export type TabsPlacement = 'right' | 'left';

export interface TabsStylesParams {
  placement: TabsPlacement;
  orientation: TabsOrientation;
  color?: MantineColor;
  radius?: DefaultMantineNumberSize;
  inverted: boolean;
  variant: TabsVariant;
}
