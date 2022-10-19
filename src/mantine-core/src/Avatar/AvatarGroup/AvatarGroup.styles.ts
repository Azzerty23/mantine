import { createStyles, DefaultMantineNumberSize } from '@mantine/styles';

interface AvatarGroupStylesParams {
  spacing: DefaultMantineNumberSize;
}

export default createStyles((theme, { spacing }: AvatarGroupStylesParams) => ({
  root: {
    display: 'flex',
    paddingLeft: theme.fn.size({ size: spacing, sizes: theme.spacing }),
  },
}));
