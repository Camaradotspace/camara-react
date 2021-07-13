import React, { MutableRefObject } from 'react';
import { ChevronRight } from 'react-feather';
import { styled } from '../../stitches.config';

export interface AccordionProps {
  /**
   * Title of the accordion
   */
  title: string;
  /**
   * Visual cue to prefix the accordion title
   */
  prefix?: React.ReactNode;
  /**
   * Content of the accordion
   */
  children?: React.ReactNode;
  /**
   * Customize the right icon
   */
  icon?: React.ReactNode;
  /**
   * Should accordion be expanded by default?
   */
  expanded?: boolean;
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
    fontSize: '$4',
    fontWeight: '$bold',
    display: 'flex',
    alignItems: 'center',
  },
  '& .accordion-title span': {
    marginRight: '$1',
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
  expanded = false,
  icon,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [height, setHeight] = React.useState('0px');
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [expandedClass, setExpandedClass] = React.useState('');
  const [expandedHeight, setExpandedHeight] = React.useState('0px');

  const content = React.useRef() as MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    if (expanded) {
      setIsExpanded(true);
      setExpandedClass('accordion-icon rotate');
      setExpandedHeight('500px');
    }
  }, []);

  const handleVisibilityToggle = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? '0px' : `${content.current.scrollHeight}px`);
  };

  const handleOff = () => {
    setIsExpanded(false);
    setExpandedClass('');
    setExpandedHeight('0px');
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
            onClick={isExpanded ? handleOff : handleVisibilityToggle}
          >
            <p className="accordion-title">
              {prefix && <span>{prefix}</span>}
              {title}
            </p>
            {icon ? (
              <span
                className={`accordion-icon ${
                  isOpen ? 'accordion-icon rotate' : ''
                } ${expandedClass}`}
              >
                {icon}
              </span>
            ) : (
              <ChevronRight
                className={`accordion-icon ${
                  isOpen ? 'accordion-icon rotate' : ''
                } ${expandedClass}`}
                color="#777"
                size={16}
              />
            )}
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
        style={{ maxHeight: isExpanded ? `${expandedHeight}` : `${height}` }}
      >
        <p className="accordion-text">{children}</p>
      </div>
    </StyledAccordionWrapper>
  );
};
