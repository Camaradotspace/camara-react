import styled, { css } from 'styled-components';
import { TextAreaProps } from './textarea.types';
import { tokens } from '../../constants/tokens';

const { $primary } = tokens.colors;

export const TextAreaWrapper = styled.div<TextAreaProps>`
  margin: 4px;

  .requiredText {
    color: red;
  }

  .helperText {
    display: block;
    color: #999;
    margin: 0 8px;
  }

  label {
    display: block;
    margin: 8px 0;
    color: #444444;
    font-size: 14px;
  }
`;

export const StyledTextArea = styled.textarea<Partial<TextAreaProps>>`
  display: inline-block;
  padding: 0.65rem 0.5rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  min-width: 250px;

  &::placeholder {
    color: #999999;
  }

  &:active,
  &:focus {
    border: 2px solid ${$primary};
  }

  ${(props) =>
    props.disabled &&
    css`
      border: 1px solid #dadce0;
    `}

  ${(props) =>
    props.resizable === false &&
    css`
      resize: none;
    `}
`;
