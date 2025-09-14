import { Value } from '@radix-ui/react-select';
import { Input } from '../ui';
import { FilterCheckbox } from './filter-checkbox';
import { Title } from './title';
import React from 'react';
import { RangeSlider } from './range-slider';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can collect" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <Title text="Price" size="sm" className="mb-5 font-bold" />
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex items-center gap-2">
          <Input type="number" placeholder="0" min={0} max={100} defaultValue={0} />
          <Input type="number" min={2} max={100} value={100} defaultValue={100} />
        </div>

        <RangeSlider min={0} max={100} step={10} value={[0, 100]} />
      </div>
    </div>
  );
};
