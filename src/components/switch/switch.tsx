import React from 'react';
import { styled } from '../../stitches.config';

const Wrapper: any = styled('div', {
  '.react-switch-checkbox': {
    height: 0,
    width: 0,
    visibility: 'hidden',
  },
  '.react-switch-label': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    width: '100px',
    height: '50px',
    background: 'grey',
    borderRadius: '100px',
    position: 'relative',
    transition: 'grey .2s',
  },
  '.react-switch-label .react-switch-button': {
    content: '',
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '45px',
    height: '45px',
    borderRadius: '45px',
    transition: '0.2s',
    background: '#fff',
    boxShadow: '0 0 2px 0 rgba(10, 10, 10, 0.29)',
  },
  '.react-switch-checkbox:checked + .react-switch-label .react-switch-button': {
    left: 'calc(100% - 2px)',
    transform: 'translateX(-100%)',
  },
  '.react-switch-label:active .react-switch-button': {
    width: '60px',
  },
  variants: {
    size: {
      small: {
        '.react-switch-label': {
          width: '50px',
          height: '25px',
          borderRadius: '50px',
          transition: 'grey .2s',
        },
        '.react-switch-label .react-switch-button': {
          top: '2px',
          left: '2px',
          width: '20px',
          height: '20px',
          borderRadius: '45px',
          transition: '0.2s',
        },
        '.react-switch-checkbox:checked + .react-switch-label .react-switch-button': {
          left: 'calc(100% - 2px)',
          transform: 'translateX(-100%)',
        },
        '.react-switch-label:active .react-switch-button': {
          width: '25px',
        },
      },
      large: {
        '.react-switch-label': {
          width: '100px',
          height: '50px',
          borderRadius: '100px',
          transition: 'grey .2s',
        },
        '.react-switch-label .react-switch-button': {
          top: '2px',
          left: '2px',
          width: '45px',
          height: '45px',
          borderRadius: '45px',
          transition: '0.2s',
        },
        '.react-switch-checkbox:checked + .react-switch-label .react-switch-button': {
          left: 'calc(100% - 2px)',
          transform: 'translateX(-100%)',
        },
        '.react-switch-label:active .react-switch-button': {
          width: '60px',
        },
      },
    },
  },
});

interface SwitchProps {
  id?: string;
  isOn?: boolean;
  handleToggle?: () => void;
  onColor?: string;
  size?: 'small' | 'large';
  css?: React.CSSProperties;
}

export const Switch: React.FC<SwitchProps> = ({
  id,
  isOn,
  handleToggle,
  onColor = '#088845',
  size = 'small',
  css,
  ...rest
}) => {
  return (
    <Wrapper size={size} {...rest} css={css}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={id ? id : `react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ backgroundColor: isOn ? onColor : '' }}
        className="react-switch-label"
        htmlFor={id ? id : `react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </Wrapper>
  );
};
