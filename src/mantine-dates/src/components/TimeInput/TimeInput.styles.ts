import { createStyles, INPUT_SIZES, DefaultMantineSize } from '@mantine/core';

export interface TimeInputStylesParams {
  size: DefaultMantineSize;
}

export default createStyles((theme, { size }: TimeInputStylesParams) => ({
  timeInput: {},
  amPmInput: {},

  disabled: {
    cursor: 'not-allowed',
  },

  controls: {
    display: 'flex',
    alignItems: 'center',
    // -2 for border offset
    height: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
  },
}));
