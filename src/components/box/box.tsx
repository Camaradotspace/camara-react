import * as React from 'react';
import { StyledBox } from './box.styles';
import { BoxProps } from './box.types';

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
