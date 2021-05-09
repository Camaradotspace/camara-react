export interface FlexProps {
  /* align flex item across the main axis */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

  /* should flex items wrap? */
  wrap?: boolean;

  /* content of flex container - flex items */
  children: React.ReactNode;

  /* width of the flex container */
  width?: number;

  /* flex direction */
  direction?: 'row' | 'column';

  /* align flex items across cross axis */
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';

  /* flex container align-items property */
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}
