import styled, { css } from 'styled-components';

export interface BadgeProps {
  /**
   * Size of the badge
   */
  size: 'large' | 'default' | 'small';
  /**
   * Color of badge
   */
  backgroundColor: string;
}

export const Badge = styled.div<BadgeProps>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || 'tomato'};
  color: #fff;
  ${(props) =>
    props.size === 'default' &&
    css`
      width: 32px;
      height: 32px;
    `};
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 40px;
      height: 40px;
    `};
  ${(props) =>
    props.size === 'small' &&
    css`
      width: 24px;
      height: 24px;
    `};
`;
