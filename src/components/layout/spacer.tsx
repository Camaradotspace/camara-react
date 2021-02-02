import * as React from 'react';
import styled from 'styled-components';

export interface SpacerProps {
  /**
   * Padding top
   */
  pt?: number;
  /**
   * Padding bottom
   */
  pb?: number;
  /**
   * Padding left
   */
  pl?: number;
  /**
   * Padding right
   */
  pr?: number;
  /**
   * Padding horizontal axis
   */
  px?: number;
  /**
   * Padding vertical axis
   */
  py?: number;
  /**
   * Margin top
   */
  mt?: number;
  /**
   * Margin bottom
   */
  mb?: number;
  /**
   * Margin left
   */
  ml?: number;
  /**
   * Margin right
   */
  mr?: number;
  /**
   * Margin horizontal axis
   */
  mx?: number;
  /**
   * Margin vertical axis
   */
  my?: number;
}

const StyledSpacer = styled.div<SpacerProps>`
  padding-top: ${(props) => props.pt}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
  padding: ${(props) => props.py}px ${(props) => props.px}px;
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  margin-left: ${(props) => props.ml}px;
  margin-right: ${(props) => props.mr}px;
  margin: ${(props) => props.my}px ${(props) => props.mx}px;
`;

export const Spacer: React.FC<SpacerProps> = ({
  children,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  mt,
  mb,
  ml,
  mr,
  mx = 0,
  my = 0,
}) => {
  return (
    <StyledSpacer
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      px={px}
      py={py}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      mx={mx}
      my={my}
    >
      {children}
    </StyledSpacer>
  );
};

Spacer.defaultProps = {};
