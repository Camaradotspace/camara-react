import styled from 'styled-components';

export interface FlexProps {}

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: space-between;
`;

Flex.defaultProps = {};

Flex.displayName = 'Flex';
