import React, { FunctionComponent } from 'react';
import { StyledTag } from './tag.styles';
import { TagProps } from './tag.types';

export const Tag: FunctionComponent<TagProps> = ({ children, color, size }) => {
  return (
    <StyledTag color={color} size={size}>
      {children.toUpperCase()}
    </StyledTag>
  );
};

Tag.defaultProps = {
  color: '#BB65FF',
  size: 'small',
  children: 'Tag',
};

Tag.displayName = 'Tag';
