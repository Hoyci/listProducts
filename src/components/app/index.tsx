import { ThemeProvider } from 'styled-components';
import { useState, useMemo } from 'react';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import Content from '../Content';
import { AppContainer } from './styles';

import ProductsService from '../../service/ProductsService';

import { Category } from '../../types';

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [optionsFilter, setOptionsFilter] = useState<Array<Category>>([]);

  const productsFiltered = useMemo(
    () => ProductsService.listProducts(searchTerm, optionsFilter),
    [searchTerm, optionsFilter]
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <AppContainer>
        <Header setSearchTerm={setSearchTerm} />
        <Content
          filteredProducts={productsFiltered}
          optionsFilter={optionsFilter}
          setOptionsFilter={setOptionsFilter}
        />
      </AppContainer>
    </ThemeProvider>
  );
}
