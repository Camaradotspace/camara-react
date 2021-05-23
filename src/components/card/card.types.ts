import { StyledComponentProps } from 'styled-components';
import {
  MarginProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
} from 'styled-system';

type StyledCardProps = MarginProps &
  LayoutProps &
  FlexboxProps &
  BorderProps & {
    /* Should the card elevate on the z-index? */
    elevate?: boolean;
    /* Should card have border around it or be entirely flat? */
    bordered?: boolean;
    /* Content of the card */
    children: React.ReactNode;
  };

type CardProps = StyledComponentProps<'div', any, StyledCardProps, never>;

export default CardProps;
