import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

import Aside from '../Aside';

import {
  Container,
  ContainerProducts,
  ContentBody,
  ContentContainer,
  ContentHeader,
  FilterContainer,
  SearchNotFoundContainer,
} from './styles';

import settingIcon from '../../assets/images/settings.svg';
import CardProduct from '../CardProduct';

import { Category, Product } from '../../types';
import CheckBoxContent from '../Checkbox';

import searchNotFound from '../../assets/images/search-error.svg';

export default function Content({
  products,
  categories,
  filteredProducts,
  filteredOptions,
  setFilteredOptions,
}: ContentProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [asideIsOpen, setAsideIsOpen] = useState<boolean>(false);

  return (
    <div>
      {asideIsOpen && !isDesktop && (
        <Aside
          setIsOpen={setAsideIsOpen}
          categories={categories}
          filteredOptions={filteredOptions}
          setFilteredOptions={setFilteredOptions}
          products={products}
        />
      )}

      {!isDesktop ? (
        <>
          <ContentHeader>
            <div>
              <button type="button" onClick={() => setAsideIsOpen(true)}>
                <img src={settingIcon} alt="Setting icon" />
                Filtro
              </button>
              <p>{filteredProducts.length} resultados</p>
            </div>
          </ContentHeader>

          <ContentBody>
            {filteredProducts.map(({ id, name, images }) => (
              <CardProduct
                key={id}
                imageUrl={images[0].asset.url}
                productName={name}
                alt={images[0].alt}
              />
            ))}
          </ContentBody>
        </>
      ) : (
        <Container>
          <FilterContainer>
            <p>Filtros</p>
            <CheckBoxContent
              products={products}
              categories={categories}
              setFilteredOptions={setFilteredOptions}
              filteredOptions={filteredOptions}
            />
          </FilterContainer>

          <ContentContainer>
            <p>{filteredProducts.length} resultados</p>
            {filteredProducts.length === 0 && filteredOptions.length === 0 ? (
              <SearchNotFoundContainer>
                <img src={searchNotFound} alt="Search not found" />
                <h2>Não encontramos nenhum produto com o nome</h2>
              </SearchNotFoundContainer>
            ) : (
              <ContainerProducts>
                {filteredProducts.map(({ id, name, images }) => (
                  <CardProduct
                    key={id}
                    imageUrl={images[0].asset.url}
                    productName={name}
                    alt={images[0].alt}
                  />
                ))}
              </ContainerProducts>
            )}
          </ContentContainer>
        </Container>
      )}
    </div>
  );
}

type ContentProps = {
  products: Product[];
  categories: Category[];
  filteredProducts: Product[];
  filteredOptions: Category[];
  setFilteredOptions: React.Dispatch<React.SetStateAction<Array<Category>>>;
};
