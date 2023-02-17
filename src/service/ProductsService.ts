import products from '../database/productsCategory.json';
import { Product, Category } from '../types';

class ProductsService {
  products: Product[];

  constructor() {
    this.products = products.data.nodes;
  }

  listProducts(searchTerm: string, catergoryOptions: Category[]) {
    let filteredProducts;
    if (catergoryOptions.length <= 0) {
      filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    } else {
      filteredProducts = this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) &&
          catergoryOptions
            .map((category) => category.name)
            .includes(product.category.name)
      );
    }
    return filteredProducts;
  }
}

export default new ProductsService();
