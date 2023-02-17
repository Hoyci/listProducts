import { ThemeProvider } from 'styled-components';
import { useState, useMemo } from 'react';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import Content from '../Content';
import { AppContainer } from './styles';

import { Category } from '../../types';

import products from '../../database/productsCategory.json';
import removeDuplicates from '../../utils/removeDuplicates';

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<Array<Category>>([]);

  const categories = removeDuplicates(
    products.data.nodes.map(({ category }) => category)
  );

  const filteredProducts = useMemo(
    () =>
      products.data.nodes.filter((product) => {
        if (filteredOptions.length <= 0) {
          return product.name.toLocaleLowerCase().includes(searchTerm);
        }
        return (
          product.name.toLocaleLowerCase().includes(searchTerm) &&
          filteredOptions
            .map((item) => item.name)
            .includes(product.category.name)
        );
      }),
    [searchTerm, filteredOptions]
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <AppContainer>
        <Header setSearchTerm={setSearchTerm} />
        <Content
          products={products.data.nodes}
          categories={categories}
          filteredProducts={filteredProducts}
          filteredOptions={filteredOptions}
          setFilteredOptions={setFilteredOptions}
        />
      </AppContainer>
    </ThemeProvider>
  );
}
