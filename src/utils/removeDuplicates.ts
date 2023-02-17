import { Category } from '../types';

export default function removeDuplicates(array: Category[]) {
  const filtered = array.filter(
    (product, index, self) =>
      index ===
      self.findIndex(
        (item) => item['_id'] === product['_id'] && item.name === product.name
      )
  );
  return filtered;
}
