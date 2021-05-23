import { StyledComponentProps } from 'styled-components';
import {
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';

type StyledButtonProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps & {
    disabled?: boolean;
    danger?: boolean;
    pill?: boolean;
    block?: boolean;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'small' | 'medium' | 'large';
  };

export type ButtonProps = StyledComponentProps<
  'button',
  any,
  StyledButtonProps,
  never
>;
