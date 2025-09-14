import { Value } from '@radix-ui/react-select';
import { Input } from '../ui';
import { FilterCheckbox } from './filter-checkbox';
import { Title } from './title';
import React from 'react';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      {/* {Filter checkboxes} */}
      <div className="flex flex-col gap-4 mb-10">
        <FilterCheckbox text="Can collect" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      {/* {Price range} */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex items-center gap-2 mb-10">
          <Input type="number" placeholder="0" min={0} max={100} defaultValue={0} />
          <Input type="number" min={2} max={100} value={100} defaultValue={100} />
        </div>

        <RangeSlider min={0} max={100} step={10} value={[0, 100]} />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients "
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: 'Cheese sauce', value: '1' },
          { text: 'Mozzarella', value: '2' },
          { text: 'Mushrooms', value: '3' },
          { text: 'Pickles', value: '4' },
          { text: 'Olives', value: '5' },
          { text: 'Onions', value: '6' },
          { text: 'Bell Peppers', value: '7' },
        ]}
        items={[
          { text: 'Cheese sauce', value: '1' },
          { text: 'Mozzarella', value: '2' },
          { text: 'Mushrooms', value: '3' },
          { text: 'Pickles', value: '4' },
          { text: 'Olives', value: '5' },
          { text: 'Onions', value: '6' },
          { text: 'Bell Peppers', value: '7' },
        ]}
      />
    </div>
  );
};
