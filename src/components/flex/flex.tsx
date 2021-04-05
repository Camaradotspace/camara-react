import * as React from 'react';
import styled from 'styled-components';

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

  /* flex container align-self property */
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';

  /* flex container flex property */
  flex?: 'grow' | 'shrink' | 'none';
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap === true && 'wrap'};
  width: ${(props) => props.width}%;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
`;

const StyledFlexItem = styled.div<FlexProps>`
  align-self: ${(props) => props.alignSelf};
  flex: ${(props) => props.flex};
`;

export const Flex: React.FC<FlexProps> = ({
  children,
  width,
  justify,
  wrap,
  direction,
  alignContent,
  alignItems,
  alignSelf,
  flex,
}) => {
  return (
    <StyledFlex
      width={width}
      justify={justify}
      wrap={wrap}
      direction={direction}
      alignItems={alignItems}
      alignContent={alignContent}
    >
      <StyledFlexItem flex={flex} alignSelf={alignSelf}>
        {children}
      </StyledFlexItem>
    </StyledFlex>
  );
};

Flex.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  direction: 'row',
  flex: 'shrink',
  justify: 'center',
  wrap: false,
};

Flex.displayName = 'Flex';
