import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

import Aside from '../Aside';
import CardProduct from '../CardProduct';
import CheckBoxContent from '../Checkbox';

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
import searchNotFound from '../../assets/images/search-error.svg';

import { Category, Product } from '../../types';

export default function Content({
  filteredProducts,
  optionsFilter,
  setOptionsFilter,
}: ContentProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [asideIsOpen, setAsideIsOpen] = useState<boolean>(false);

  return (
    <div>
      {asideIsOpen && !isDesktop && (
        <Aside
          setIsOpen={setAsideIsOpen}
          optionsFilter={optionsFilter}
          setOptionsFilter={setOptionsFilter}
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
              optionsFilter={optionsFilter}
              setOptionsFilter={setOptionsFilter}
            />
          </FilterContainer>

          <ContentContainer>
            <p>{filteredProducts.length} resultados</p>
            {filteredProducts.length === 0 && optionsFilter.length === 0 ? (
              <SearchNotFoundContainer>
                <img src={searchNotFound} alt="Search not found" />
                <h2>Não encontramos nenhum produto com este nome</h2>
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
  filteredProducts: Product[];
  optionsFilter: Category[];
  setOptionsFilter: React.Dispatch<React.SetStateAction<Array<Category>>>;
};
