import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled, { css } from 'styled-components';
import { primary } from '../../utils/colors';

export interface AvatarProps {
  loading?: boolean;
  src: string;
  size?: string;
}

export const sizes = {
  large: 40,
  medium: 32,
  small: 24,
  tiny: 16,
};

const Image = styled.div<AvatarProps>`
  background: ${(props) => (!props.loading ? 'transparent' : primary.blue)};
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;

  height: ${sizes.medium}px;
  width: ${sizes.medium}px;
  line-height: ${sizes.medium}px;

  ${(props) =>
    props.size === 'tiny' &&
    css`
      height: ${sizes.tiny}px;
      width: ${sizes.tiny}px;
      line-height: ${sizes.tiny}px;
    `}

  ${(props) =>
    !props.src &&
    css`
      background: ${!props.loading && '#37D5D3'};
    `}

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const Avatar = ({ src, size, loading }: AvatarProps) => {
  return (
    <Image loading={loading} src='' size={size}>
      <img src={src} alt='' />
    </Image>
  );
};

Avatar.defaultProps = {
  loading: false,
  size: 'medium',
};
