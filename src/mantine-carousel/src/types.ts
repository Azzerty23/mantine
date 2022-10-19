import type { DefaultMantineNumberSize } from '@mantine/core';
import type { EmblaCarouselType } from 'embla-carousel-react';

export type Embla = EmblaCarouselType;
export type CarouselOrientation = 'vertical' | 'horizontal';
export interface CarouselBreakpoint {
  maxWidth?: DefaultMantineNumberSize;
  minWidth?: DefaultMantineNumberSize;
  slideSize: string | number;
  slideGap?: DefaultMantineNumberSize;
}
