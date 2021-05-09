import React, { FunctionComponent } from 'react';
import { StyledDivider } from './divider.styles';
import { DividerProps } from './divider.types';

export const Divider: FunctionComponent<DividerProps> = ({ type }) => {
  return <StyledDivider type={type} />;
};

Divider.defaultProps = {
  type: 'normal',
};

Divider.displayName = 'Divider';
