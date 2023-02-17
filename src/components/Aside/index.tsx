import React from 'react';
import {
  AsideContainer,
  AsideHeader,
  ButtonClose,
  AsideOverlay,
} from './styles';

import settingIcon from '../../assets/images/settings.svg';
import closeIcon from '../../assets/images/close.svg';

import CheckBoxContent from '../Checkbox';
import { Category, Product } from '../../types';

export default function Aside({
  products,
  categories,
  filteredOptions,
  setFilteredOptions,
  setIsOpen,
}: AsideProps) {
  const handleCloseAside = () => setIsOpen(false);
  const handleClearOptions = () => setFilteredOptions([]);

  return (
    <aside>
      <ButtonClose type="button" onClick={handleCloseAside}>
        <img src={closeIcon} alt="Close icon" />
      </ButtonClose>

      <AsideContainer>
        <AsideHeader>
          <span>
            <img src={settingIcon} alt="settingIcon" />
            Filtrar por:
          </span>
          <button type="button" onClick={handleClearOptions}>
            Limpar filtros
          </button>
        </AsideHeader>

        <CheckBoxContent
          products={products}
          categories={categories}
          setFilteredOptions={setFilteredOptions}
          filteredOptions={filteredOptions}
        />
      </AsideContainer>

      <AsideOverlay onClick={handleCloseAside} />
    </aside>
  );
}

type AsideProps = {
  filteredOptions: Category[];
  categories: Category[];
  products: Product[];
  setFilteredOptions: React.Dispatch<React.SetStateAction<Array<Category>>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
