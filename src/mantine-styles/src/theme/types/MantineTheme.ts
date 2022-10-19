import type { CSSProperties } from 'react';
import type {
  MantineThemeSizes,
  DefaultMantineSize,
  DefaultMantineSizes,
  DefaultMantineNumberSize,
  MantineNumberSize,
} from './MantineSize';
import type { DeepPartial } from './DeepPartial';
import type { MantineThemeColors } from './MantineColor';
import type { MantineGradient } from './MantineGradient';
import type { VariantInput, VariantOutput } from '../functions/fns/variant/variant';
import type { ColorScheme } from './ColorScheme';
import type { CSSObject } from '../../tss';

export type LoaderType = 'bars' | 'oval' | 'dots';
export type MantineThemeOther = Record<string, any>;
export type MantineThemeComponents = Record<string, ThemeComponent>;

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  fontWeight: CSSProperties['fontWeight'];
  lineHeight: CSSProperties['lineHeight'];
}

type Shade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface MantinePrimaryShade {
  light: Shade;
  dark: Shade;
}

interface MantineThemeFunctions {
  fontStyles(): any;
  focusStyles(selector?: string): any;
  cover(offset?: number | string): any;
  themeColor(
    color: string,
    shade?: number,
    primaryFallback?: boolean,
    useSplittedShade?: boolean
  ): string;
  rgba(color: string, alpha: number): string;
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  linearGradient(deg: number, ...colors: string[]): string;
  radialGradient(...colors: string[]): string;
  gradient(gradient?: MantineGradient): string;
  smallerThan(breakpoint: MantineNumberSize): string;
  largerThan(breakpoint: MantineNumberSize): string;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
  radius(size?: DefaultMantineNumberSize | (string & {})): string | number;
  variant(payload: VariantInput): VariantOutput;
  primaryShade(colorScheme?: ColorScheme): Shade;
  hover(hoverStyle: CSSObject): any;
  primaryColor(colorScheme?: ColorScheme): string;
}

export interface MantineTheme {
  dir: 'ltr' | 'rtl';
  primaryShade: Shade | MantinePrimaryShade;
  focusRing: 'auto' | 'always' | 'never';
  defaultRadius: DefaultMantineNumberSize | (string & {});
  loader: LoaderType;
  dateFormat: string;
  colorScheme: ColorScheme;
  white: string;
  black: string;
  colors: MantineThemeColors;
  fontFamily: CSSProperties['fontFamily'];
  lineHeight: CSSProperties['lineHeight'];
  transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  fontFamilyMonospace: CSSProperties['fontFamily'];
  primaryColor: keyof MantineThemeColors;
  respectReducedMotion: boolean;
  cursorType: 'default' | 'pointer';
  defaultGradient: MantineGradient;

  fontSizes: DefaultMantineSizes;
  radius: DefaultMantineSizes;
  spacing: DefaultMantineSizes;
  breakpoints: MantineThemeSizes;
  shadows: Record<DefaultMantineSize, string>;

  headings: {
    fontFamily: CSSProperties['fontFamily'];
    fontWeight: CSSProperties['fontWeight'];
    sizes: {
      h1: HeadingStyle;
      h2: HeadingStyle;
      h3: HeadingStyle;
      h4: HeadingStyle;
      h5: HeadingStyle;
      h6: HeadingStyle;
    };
  };

  fn: MantineThemeFunctions;
  other: MantineThemeOther;
  activeStyles: CSSObject;
  datesLocale: string;
  components: MantineThemeComponents;
  globalStyles: (theme: MantineTheme) => CSSObject;
}

interface ThemeComponent {
  defaultProps?: Record<string, any>;
  classNames?: Record<string, string>;
  styles?:
    | Record<string, CSSObject>
    | ((theme: MantineTheme, params: any) => Record<string, CSSObject>);
}

export type MantineThemeBase = Omit<MantineTheme, 'fn'>;

export type MantineThemeOverride = DeepPartial<
  Omit<MantineThemeBase, 'other' | 'components' | 'breakpoints'>
> &
  Partial<Pick<MantineThemeBase, 'other' | 'components' | 'breakpoints'>>;
