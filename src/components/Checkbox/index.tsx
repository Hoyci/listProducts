import { Category, Product } from '../../types';
import CheckBox from './Checkbox';

export default function CheckBoxContent({
  products,
  categories,
  filteredOptions,
  setFilteredOptions,
}: CheckBoxContainerProps) {
  return (
    <main>
      {categories.map((category) => (
        <CheckBox
          key={category['_id']}
          id={category['_id']}
          label={category.name}
          optionQuantity={
            products.filter((item) => item.category.name === category.name)
              .length
          }
          checked={
            filteredOptions.find((item) => item.name === category.name)?.checked
          }
          setFilteredOptions={setFilteredOptions}
        />
      ))}
    </main>
  );
}

type CheckBoxContainerProps = {
  products: Product[];
  categories: Category[];
  filteredOptions: Category[];
  setFilteredOptions: React.Dispatch<React.SetStateAction<Array<Category>>>;
};
