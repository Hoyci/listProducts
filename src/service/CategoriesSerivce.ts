import products from '../database/productsCategory.json';
import { Product } from '../types';
import removeDuplicates from './utils/removeDuplicates';

class CategoriesService {
  products: Product[];

  constructor() {
    this.products = products.data.nodes;
  }

  getCategories() {
    return removeDuplicates(this.products.map(({ category }) => category));
  }

  countProductsByCategoryId(categoryId: string) {
    const productsByCategoryId = this.products.filter(
      (product) => product.category['_id'] === categoryId
    );
    return productsByCategoryId.length;
  }
}

export default new CategoriesService();
