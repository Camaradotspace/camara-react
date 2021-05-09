import styled from 'styled-components';
import { FlexProps } from './flex.types';

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap === true && 'wrap'};
  width: ${(props) => props.width}%;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
`;
