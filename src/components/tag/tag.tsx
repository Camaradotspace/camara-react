import styled, { css } from 'styled-components';

export interface TagProps {
  /**
   * Color?
   */
  color: string;
  /**
   * Size of tag
   */
  size?: 'small' | 'medium' | 'large';
}

export const Tag = styled.div<TagProps>`
  border: 1.5px solid ${(props) => props.color};
  border-radius: 4px;
  padding: 0.35rem 0.5rem;
  text-transform: uppercase;
  color: ${(props) => props.color};
  background-color: ${(props) => props.color}30;
  font-family: sans-serif;
  font-weight: 500;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: 12px;
      padding: 0.15rem 0.3rem;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: 14px;
      padding: 0.25rem 0.4rem;
    `}
    ${(props) =>
    props.size === 'large' &&
    css`
      font-size: 16px;
    `};
`;

Tag.defaultProps = {
  color: '#BB65FF',
  size: 'small',
};

Tag.displayName = 'Tag';
