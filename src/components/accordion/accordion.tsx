import React, { MutableRefObject } from 'react';
import { ChevronRight } from 'react-feather';
import { styled } from '../../stitches.config';

export interface AccordionProps {
  title: string;
  prefix?: React.ReactNode;
  children?: React.ReactNode;
}

const StyledAccordionWrapper = styled('section', {
  border: '1px solid $ui_border',

  '& .accordion': {
    display: 'flex',
    alignItems: 'center',
    padding: '$2 $3',
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    color: '$text_primary',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.6s ease',
  },

  '& .accordion-title': {
    fontWeight: '$bold',
  },

  '& .accordion-icon': {
    marginLeft: 'auto',
    transition: 'transform 0.4s ease',
  },

  '& .rotate': {
    transform: 'rotate(90deg)',
  },

  '& .accordion:hover': {
    backgroundColor: '$bgHighlight',
  },

  '& .active': {
    backgroundColor: 'transparent',
  },

  '& .accordion:active': {
    backgroundColor: '',
  },

  '& .accordion-content': {
    backgroundColor: '$bg_primary',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
  },

  '& .accordion-text': {
    color: '$text_secondary',
    fontSize: '$2',
    lineHeight: '$copy',
    padding: '$3',
  },
});

export const Accordion: React.FunctionComponent<AccordionProps> = ({
  title,
  children,
  prefix,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [height, setHeight] = React.useState('0px');

  const content = React.useRef() as MutableRefObject<HTMLDivElement>;

  const handleVisibilityToggle = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? '0px' : `${content.current.scrollHeight}px`);
  };
  return (
    <StyledAccordionWrapper>
      {/* opener */}
      <div id="accordion-title">
        <h2>
          <button
            id="accordion-button"
            className={`accordion ${!isOpen ? 'active' : ''}`}
            aria-controls="accordion-content"
            aria-expanded={isOpen}
            onClick={handleVisibilityToggle}
          >
            <p className="accordion-title">
              {prefix && <span>{prefix}</span>}
              {title}
            </p>
            <ChevronRight
              className={`accordion-icon ${
                isOpen ? 'accordion-icon rotate' : ''
              }`}
              color="#777"
              size={16}
            />
          </button>
        </h2>
      </div>
      {/* content */}
      <div
        id="accordion-content"
        ref={content}
        aria-labelledby="accordion-button"
        role="region"
        // hidden={!isOpen}
        className="accordion-content"
        style={{ maxHeight: `${height}` }}
      >
        <p className="accordion-text">{children}</p>
      </div>
    </StyledAccordionWrapper>
  );
};
