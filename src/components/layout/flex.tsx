import * as React from 'react';
import styled from 'styled-components';

interface FlexProps {
  justify?:
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'flex-end'
    | 'flex-start';
  wrap?: boolean;
  children: React.ReactNode;
  width?: number;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap === true && 'wrap'};
  width: ${(props) => props.width}%;
`;

export const Flex: React.FC<FlexProps> = ({
  children,
  width,
  justify,
  wrap,
}) => {
  return (
    <StyledFlex width={width} justify={justify} wrap={wrap}>
      {children}
    </StyledFlex>
  );
};

Flex.defaultProps = {};

Flex.displayName = 'Flex';
