import * as React from 'react';
import styled, { css } from 'styled-components';

export interface BoxProps {
  /* What width should the box be? */
  width?: number;

  /* Should children of the box be centered? */
  center?: boolean;

  /* Highlight the box on the screen, useful for debug purposes */
  debug?: boolean;

  /* Content of the box */
  children: React.ReactNode;

  /* Set box height */
  height?: number;

  /* Set background color */
  color?: string;

  /* Set box overflow */
  overflow?: 'visible' | 'hidden' | 'scroll' | 'scrollX' | 'scrollY' | 'auto';

  /* Set box border */
  border?: boolean;

  /* Set box position */
  position?: 'static' | 'absolute' | 'relative' | 'fixed';

  /* Set box min-width */
  minWidth?: number;

  /* Set box min-height */
  minHeight?: number;

  /* Set box max-width */
  maxWidth?: number;

  /* Set box max-height */
  maxHeight?: number;

  /* Set box ARIA role */
  role?:
    | 'article'
    | 'aside'
    | 'details'
    | 'div'
    | 'figcaption'
    | 'figure'
    | 'footer'
    | 'header'
    | 'main'
    | 'nav'
    | 'section'
    | 'summary';

  /* Padding top */
  pt?: number;

  /* Padding bottom */
  pb?: number;

  /* Padding left */
  pl?: number;

  /* Padding right */
  pr?: number;

  /* Padding horizontal axis */
  px?: number;

  /* Padding vertical axis */
  py?: number;

  /* Padding all axis */
  pd?: number;

  /* Margin top */
  mt?: number;

  /* Margin bottom */
  mb?: number;

  /* Margin left */
  ml?: number;

  /* Margin right */
  mr?: number;

  /* Margin horizontal axis */
  mx?: number;

  /* Margin vertical axis */
  my?: number;

  /* Margin all axis */
  mg?: number;
}

const StyledBox = styled.div<Partial<BoxProps>>`
  display: block;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};

  padding: ${(props) => props.pd}px;
  padding-top: ${(props) => props.pt}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
  // horizontal padding
  ${(props) =>
    props.px &&
    css`
      padding-left: ${props.px}px;
      padding-right: ${props.px}px;
    `}
  // vertical padding
  ${(props) =>
    props.py &&
    css`
      padding-top: ${props.py}px;
      padding-bottom: ${props.py}px;
    `}
  margin: ${(props) => props.mg}px;
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  margin-left: ${(props) => props.ml}px;
  margin-right: ${(props) => props.mr}px;
  // horizontal margin
  ${(props) =>
    props.mx &&
    css`
      margin-left: ${props.mx}px;
      margin-right: ${props.mx}px;
    `}
  // vertical margin
  ${(props) =>
    props.my &&
    css`
      margin-top: ${props.my}px;
      margin-bottom: ${props.my}px;
    `}

  ${(props) =>
    props.center &&
    css`
      margin: 0 auto;
    `}

  ${(props) =>
    props.debug &&
    css`
      border: 2px solid red;
    `}

  ${(props) =>
    props.border &&
    css`
      border: 1px solid #dadce0;
    `}
`;

export const Box: React.FC<BoxProps> = ({
  children,
  width,
  height,
  color,
  overflow,
  border,
  position,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  center,
  debug,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  pd,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  mg,
}) => {
  return (
    <StyledBox
      width={width}
      center={center}
      debug={debug}
      height={height}
      color={color}
      overflow={overflow}
      border={border}
      position={position}
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      px={px}
      py={py}
      pd={pd}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      mx={mx}
      my={my}
      mg={mg}
    >
      {children}
    </StyledBox>
  );
};

Box.defaultProps = {
  center: false,
  debug: false,
  border: false,
};

Box.displayName = 'Box';
