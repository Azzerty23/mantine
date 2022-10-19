import { createStyles, DefaultMantineNumberSize, DefaultMantineSizes } from '@mantine/styles';

export interface ContainerStylesParams {
  fluid: boolean;
  size: DefaultMantineNumberSize;
  sizes: DefaultMantineSizes;
}

export default createStyles((theme, { fluid, size, sizes }: ContainerStylesParams) => ({
  root: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    maxWidth: fluid ? '100%' : theme.fn.size({ size, sizes }),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));
