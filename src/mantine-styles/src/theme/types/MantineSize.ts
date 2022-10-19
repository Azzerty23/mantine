export type DefaultMantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DefaultMantineSizes = Record<DefaultMantineSize, number>;

export type MantineThemeSizesOverride = {};

export type MantineThemeSizes = MantineThemeSizesOverride extends {
  sizes: Record<infer CustomSizes, number>;
}
  ? Record<CustomSizes, number>
  : DefaultMantineSizes;

export type MantineSize = keyof MantineThemeSizes;

export type DefaultMantineNumberSize = DefaultMantineSize | number;
export type MantineNumberSize = MantineSize | number;
