import styled, { css } from 'styled-components';
import { tokens } from '../../constants/tokens';
import { InputFieldProps } from './input.types';

const { $primary } = tokens.colors;

export const InputFieldWrapper = styled.div<InputFieldProps>`
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
  input {
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
      props.inline &&
      css`
        display: inline;
      `}
  }
`;
