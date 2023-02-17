import CategoriesSerivce from '../../service/CategoriesSerivce';
import { Category } from '../../types';
import CheckBox from './Checkbox';

export default function CheckBoxContent({
  optionsFilter,
  setOptionsFilter,
}: CheckBoxContainerProps) {
  return (
    <main>
      {CategoriesSerivce.getCategories().map((category) => (
        <CheckBox
          key={category['_id']}
          id={category['_id']}
          label={category.name}
          optionQuantity={CategoriesSerivce.countProductsByCategoryId(
            category['_id']
          )}
          checked={
            optionsFilter.find((item) => item.name === category.name)?.checked
          }
          setOptionsFilter={setOptionsFilter}
        />
      ))}
    </main>
  );
}

type CheckBoxContainerProps = {
  optionsFilter: Category[];
  setOptionsFilter: React.Dispatch<React.SetStateAction<Array<Category>>>;
};
