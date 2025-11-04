'use client';
import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '../hooks/useFilterIngredients';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter } from 'next/navigation';
interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter;

  const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>());
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>());

  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 100,
  });

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  React.useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };

    const query = qs.stringify(filters, { arrayFormat: 'comma' });

    router.push(`?${query}`);
  }, [prices, pizzaTypes, sizes, selectedIngredients]);

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      {/* {Filter checkboxes} */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        title="sizes "
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          { text: '20cm', value: '20' },
          { text: '30cm', value: '30' },
          { text: '40cm', value: '40' },
        ]}
        loading={loading}
      />

      {/* {Price range} */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex items-center gap-2 mb-10">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={2}
            max={100}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients "
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
      />
    </div>
  );
};
