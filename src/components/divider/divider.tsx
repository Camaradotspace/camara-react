import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { compose, margin, MarginProps } from 'styled-system';

export interface DividerProps extends MarginProps {
  /* What styled should the line be of? */
  type?: 'dashed' | 'dotted' | 'normal';
}

const StyledDivider = styled.hr<DividerProps>`
  ${compose(margin)}
  display: block;
  min-width: 600px;
  border: 1px solid ${({ theme }) => theme.colors.ui.border};

  ${props =>
    props.type === 'dashed' &&
    css`
      border: 1px dashed ${({ theme }) => theme.colors.ui.border};
    `};
  ${props =>
    props.type === 'dotted' &&
    css`
      border: 1px dotted ${({ theme }) => theme.colors.ui.border};
    `};
  ${props =>
    props.type === 'normal' &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.ui.border};
    `};
`;

export const Divider: FunctionComponent<DividerProps> = ({
  type,
  ...props
}) => {
  return <StyledDivider type={type} {...props} />;
};

Divider.defaultProps = {
  type: 'normal',
};

Divider.displayName = 'Divider';
