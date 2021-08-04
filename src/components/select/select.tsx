import React, { useRef, useState } from 'react';
import { ChevronDown, Check } from 'react-feather';
import { styled } from '../../stitches.config';
import useOnClickOutside from '../../../src/hooks/useOnClickOutside';
import { Flex } from '..';

export type Option = {
  id: string | number;
  title: string;
  value: string;
  extra?: string;
};

export interface SelectProps {
  placeholder: string;
  options: Option[];
  extended?: boolean;
  onSelect?: (selection: Option) => void;
  multiple?: boolean;
}

const SelectWrapper = styled('div', {
  fontFamily: '$body',
  '& li': {
    listStyle: 'none',
  },
  '& ul': {
    border: '1px solid $ui_border',
    borderRadius: '$2',
    marginTop: '$1',
    boxShadow: '$bg_shadow',
    backgroundColor: '$bg_primary',
  },
});

const SelectBox = styled('div', {
  backgroundColor: '$bg_primary',
  color: '$text_primary',
  border: '1px solid $ui_border',
  borderRadius: '$2',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '100px',
  height: '$3',
  padding: '$3 0',
  fontWeight: '$regular',
  '& div > p': {
    paddingLeft: '12px',
    fontSize: '$3',
  },
  '& svg': {
    paddingRight: '$2',
  },
});

const SelectOption = styled('button', {
  fontFamily: '$body',
  border: 'none',
  borderBottom: '0.5px solid $ui_border',
  backgroundColor: '$bg_primary',
  color: '$text_primary',
  textAlign: 'left',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '$1 0',
  padding: '$1 0',
  cursor: 'pointer',
  '& span': {
    width: '$3',
    height: '$3',
    marginLeft: '12px',
    marginRight: '12px',
  },
  '& span > img': {
    width: '$3',
    height: '$3',
  },
  '& div': {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    '& p': {
      paddingRight: '$3',
      fontSize: '$2',
      fontWeight: '$medium',
    },
    '& small': {
      marginTop: '2px',
      fontSize: '$1',
      lineHeight: '$copy',
      color: '$text_secondary',
    },
  },
  '&:hover': {
    backgroundColor: '$button_secondary',
  },
});

export const Select = ({
  placeholder = 'Choose from...',
  options,
  extended,
  onSelect,
  multiple,
}: SelectProps) => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  const [selection, setSelection] = useState<[] | Option[]>([]);

  const toggle = (action: boolean) => setOpen(action);

  const handleClickOutside = () => {
    // custom logic here
    setOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleOnClick = (option: Option) => {
    if (!selection.some(current => current.id === option.id)) {
      if (!multiple) {
        setSelection([option]);
        toggle(!open);
      } else if (multiple) {
        setSelection([...selection, option]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== option.id
      );
      setSelection([...selectionAfterRemoval]);
      toggle(!open);
    }
    if (onSelect) {
      onSelect(option);
    }
  };

  const isOptionInSelection = (option: Option) => {
    if (selection?.find(current => current.id === option.id)) {
      return true;
    }
    return false;
  };

  const selectedStyles = {
    alignItems: extended ? 'flex-start' : 'center',
    backgroundColor: '$brand_primary',
    color: '$text_inverse',
    borderLeft: '2px solid $brand_secondary',
    borderTop: 'none',
    borderRight: '2px solid $brand_secondary',
    borderBottom: 'none',
    '&:hover': {
      backgroundColor: '$brand_primary',
    },
    '& span': {
      width: '14px',
      height: '14px',
    },
    '& div > small': {
      color: '$activeTextSecondary',
    },
  };

  return (
    <SelectWrapper
      ref={ref}
      css={{
        '& ul': {
          minWidth: extended ? '400px' : '150px',
        },
      }}
    >
      <SelectBox
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div>
          {selection?.length === 0 ? (
            <p className="selected-text">{placeholder}</p>
          ) : (
            <Flex>
              {selection?.map(selected => (
                <p key={selected.id} className="selected-text">
                  {selected.title}
                  {multiple && `,`}
                </p>
              ))}
            </Flex>
          )}
        </div>
        <ChevronDown color="#555" size={16} />
      </SelectBox>
      {open && (
        <ul>
          {options.map(option => (
            <li key={option.id} className="select-menu-options">
              <SelectOption
                css={
                  isOptionInSelection(option)
                    ? {
                        ...selectedStyles,
                      }
                    : {
                        height: extended ? '60px' : '24px',
                        alignItems: extended ? 'flex-start' : 'center',
                      }
                }
                type="button"
                onClick={() => handleOnClick(option)}
              >
                <span>{isOptionInSelection(option) && <Check />}</span>
                <div>
                  <p>{option.title}</p>
                  {extended && <small>{option.extra}</small>}
                </div>
              </SelectOption>
            </li>
          ))}
        </ul>
      )}
    </SelectWrapper>
  );
};
