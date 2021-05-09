import styled, { css } from 'styled-components';
import { AvatarProps } from './avatar.types';
import { tokens } from '../../constants';

const { colors, space, fontSizes } = tokens;

const sizes = {
  large: 80,
  medium: 64,
  small: 40,
  tiny: 24,
};

export const StyledImage = styled.div<Partial<AvatarProps>>`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-transform: uppercase;

  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  line-height: ${(props) => props.size}px;
  margin: ${space.$1};

  ${(props) =>
    props.shape === 'square' &&
    css`
      border-radius: 0;
    `}

  ${(props) =>
    props.size === 'tiny' &&
    css`
      height: ${sizes.tiny}px;
      width: ${sizes.tiny}px;
      line-height: ${sizes.tiny}px;

      .initials {
        font-size: ${fontSizes.$h4};
      }
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      height: ${sizes.small}px;
      width: ${sizes.small}px;
      line-height: ${sizes.small}px;

      .initials {
        font-size: ${fontSizes.$h3};
      }
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      height: ${sizes.medium}px;
      width: ${sizes.medium}px;
      line-height: ${sizes.medium}px;

      .initials {
        font-size: ${fontSizes.$h2};
      }
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      height: ${sizes.large}px;
      width: ${sizes.large}px;
      line-height: ${sizes.large}px;

      .initials {
        font-size: ${fontSizes.$h1};
      }
    `}
  ${(props) =>
    props.stories === true &&
    css`
      border: 5px solid #fff;
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      box-shadow: 0 0 0 2px orange;
    `}

    ${(props) =>
    !props.imageUrl &&
    css`
      background-color: ${props.backgroundColor || colors.$backgroundWhite};
    `}

    ${(props) =>
    props.icon &&
    css`
      text-align: center;
      vertical-align: middle;
      padding: 8px;
    `}

    img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: ${(props) => props.fit};
  }
`;

// Avatar with initials
export const StyledInitials = styled.div<Partial<AvatarProps>>`
  background-color: ${(props) =>
    props.backgroundColor || colors.$backgroundWhite};
  color: ${(props) => props.color || colors.$primary};
  text-align: center;
  font-size: ${(props) => props.initialsSize}px;
  font-weight: 500;
`;
