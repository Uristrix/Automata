import cn from 'classnames';
import { useId } from 'react';
import ReactSelect from 'react-select';
import type { GroupBase, Props } from 'react-select';

export type DefaultSelectOption = { label: string; value: string };

type AdditionalSelectProps = {
  label?: string;
  classes?: { root?: string; label?: string };
  invalid?: boolean;
  id?: string;
};

function Select<
  Option = DefaultSelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({ label, classes, invalid, ...props }: Props<Option, IsMulti, Group> & AdditionalSelectProps) {
  const instanceId = useId();
  return (
    <div className={classes?.root}>
      {label && <span className={cn('text-pseudo-black text-xs pb-1', classes?.label)}>{label}</span>}
      <ReactSelect<Option, IsMulti, Group>
        {...props}
        placeholder={props?.placeholder ?? 'Выберите значение'}
        instanceId={props.id ?? instanceId}
        styles={{
          control: (base, state) => ({
            ...base,
            borderRadius: '0.75rem',
            padding: '0px 8px',
            outline: 'none',
            boxShadow: 'none',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            textOverflow: 'ellipsis',
            border: '2px solid #bebebe',
            borderColor: invalid ? '#c70000' : state.isFocused ? '#006a8d' : '#BEBEBE',
            ':hover': {
              borderColor: '#006a8d',
            },
          }),
          indicatorSeparator: (base) => ({ ...base, display: 'none' }),
          dropdownIndicator: (base) => ({
            ...base,
            padding: '0',
            cursor: 'pointer',
          }),
          menuList: (base) => ({
            ...base,
            borderRadius: '0.75rem',
            border: '2px solid #BEBEBE',
            padding: '6px 12px',
          }),
          menu: (base) => ({ ...base, borderRadius: '16px', zIndex: '15' }),
          option: (base, state) => ({
            ...base,
            color: '#000000',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            padding: '2px 12px',
            ':hover': {
              color: '#2ba64a',
            },
            ':active': {
              backgroundColor: 'transparent',
            },
            fontWeight: state.isSelected ? 'bold' : base.fontWeight,
          }),
        }}
      />
    </div>
  );
}

export default Select;
