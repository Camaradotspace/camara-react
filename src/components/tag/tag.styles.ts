import styled, { css } from 'styled-components';
import { TagProps } from './tag.types';

export const StyledTag = styled.div<TagProps>`
  border: 1.5px solid ${(props) => props.color};
  border-radius: 4px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.color}30;
  font-weight: 500;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  margin: 4px;
  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: 10px;
      padding: 0.15rem 0.3rem;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: 12px;
      padding: 0.15rem 0.4rem;
    `}
    ${(props) =>
    props.size === 'large' &&
    css`
      font-size: 14px;
      padding: 0.075rem 0.5rem;
    `};
`;